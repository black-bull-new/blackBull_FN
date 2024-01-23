import { Request, Response } from "express";
import { VehicleDetails } from "../../../type";
import VehicleModel from "../../pojos/vehicle";
import { DeleteVehicleService, FetchedAllVehicleService, FetchedVehicleServiceById, vehicleService } from "../../services/vehicle-service";
import { isValidObjectId } from "mongoose";

export const VehicleController = async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id;
        const vehicle: VehicleDetails = req.body;
        const checkIfExists = async (field: string, value: string, errorMessage: string) => {
            const existingRecord = await VehicleModel.findOne({ [field]: value });
            return existingRecord ? errorMessage : null;
        };
        const errors = await Promise.all([
            checkIfExists('registrationNumber', vehicle.registrationNumber, "* Registration number already exists."),
            checkIfExists('vinNumber', vehicle.vinNumber, "* Vin number already exists."),
            checkIfExists('engineNumber', vehicle.engineNumber, "* Engine number already exists."),
            checkIfExists('policyNumber', vehicle.policyNumber, "* Policy number already exists."),
        ]);
        const errorMessages = errors.filter(Boolean);
        if (errorMessages.length > 0) {
            return res.status(400).json({ success: false, messages: errorMessages });
        }
        const data = await vehicleService(vehicle, userId);
        res.json({ data });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

export const FetchedVehicleController = async (req: Request, res: Response) => {
    try {
        const currentUser = req?.user;
        if (!currentUser) return res.status(401).json({ error: "Unauthorized" });
        const id = req.params;
        if (!id || !isValidObjectId(id)) return res.status(400).json({ error: "Invalid ID" });
        const data = await FetchedVehicleServiceById(req.params.id);
        res.json({ data });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};


export const FetchedAllVehicleController = async (req: Request, res: Response) => {
    try {
        const currentUser = req?.user;
        if (!currentUser) return res.status(401).json({ error: "Unauthorized" });
        const data = await FetchedAllVehicleService(currentUser.id);
        res.json({ data });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};


export const DeleteVehicleController = async (req: Request, res: Response) => {
    try {
        const currentUser = req?.user;
        if (!currentUser) return res.status(401).json({ error: "Unauthorized" });
        const id = req.params.id;
        if (!id || !isValidObjectId(id)) return res.status(400).json({ error: "Invalid ID" });
        const data = await DeleteVehicleService(id);
        res.json({ data });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};


export const UpdateVehicleController = async (req: Request, res: Response) => {
    try {
        const currentUser = req?.user;
        const VehicleDataForUpdate: VehicleDetails = req.body;
        if (!currentUser) return res.status(401).json({ error: "Unauthorized" });
        const id = req.params.id;
        if (!id || !isValidObjectId(id)) return res.status(400).json({ error: "Invalid ID" });
        const data = await VehicleModel.findByIdAndUpdate(
            id,
            VehicleDataForUpdate,
            { new: true }
        )
        if (!data) return res.status(404).json({ error: "Vehicle not found" });
        res.json({ data });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}
