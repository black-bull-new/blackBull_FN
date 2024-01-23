import { Request, Response } from "express";
import { DriverDetails } from "../../../type";
import DriverModel from "../../pojos/driver";
import { DeleteDriverService, FetchedAllDriverService, FetchedDriverServiceById, driverService } from "../../services/driver-service";
import { isValidObjectId } from "mongoose";

export const DriverController = async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id;
        const driver: DriverDetails = req.body;
        console.log({ driver })
        const checkIfExists = async (field: string, value: string, errorMessage: string) => {
            const existingRecord = await DriverModel.findOne({ [field]: value });
            return existingRecord ? errorMessage : null;
        };
        const errors = await Promise.all([
            checkIfExists('email', driver.email, "* Email already exists."),
            checkIfExists('mobile', driver.mobile, "* Mobile already exists."),
            checkIfExists('licenseDetails.licenseNumber', driver.licenseDetails.licenseNumber, "* License number already exists."),
            checkIfExists('licenseDetails.licenseCardNumber', driver.licenseDetails.licenseCardNumber, "* License card number already exists."),
        ]);
        const errorMessages = errors.filter(Boolean);
        if (errorMessages.length > 0) {
            return res.status(400).json({ success: false, messages: errorMessages });
        }
        const data = await driverService(driver, userId);
        res.json({ data });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export const FetchedDriverController = async (req: Request, res: Response) => {
    try {
        const currentUser = req?.user;
        if (!currentUser) return res.status(401).json({ error: "Unauthorized" });
        const id = req.params;
        if (!id || !isValidObjectId(id)) return res.status(400).json({ error: "Invalid ID" });
        const data = await FetchedDriverServiceById(req.params.id);
        res.json({ data });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export const FetchedAllDriverController = async (req: Request, res: Response) => {
    try {
        const currentUser = req?.user;
        if (!currentUser) return res.status(401).json({ error: "Unauthorized" });
        const data = await FetchedAllDriverService(currentUser.id);
        res.json({ data });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export const DeleteDriverController = async (req: Request, res: Response) => {
    try {
        const currentUser = req?.user;
        if (!currentUser) return res.status(401).json({ error: "Unauthorized" });
        const id = req.params.id;
        if (!id || !isValidObjectId(id)) return res.status(400).json({ error: "Invalid ID" });
        const data = await DeleteDriverService(id);
        res.json({ data });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const UpdateDriverController = async (req: Request, res: Response) => {
    try {
        const currentUser = req?.user;
        const DriverDataForUpdate: DriverDetails = req.body;
        if (!currentUser) return res.status(401).json({ error: "Unauthorized" });
        const id = req.params.id;
        if (!id || !isValidObjectId(id)) return res.status(400).json({ error: "Invalid ID" });
        const data = await DriverModel.findByIdAndUpdate(
            id,
            DriverDataForUpdate,
            { new: true }
        )
        if (!data) return res.status(404).json({ error: "Driver not found" });
        res.json({ data });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}