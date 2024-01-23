import { Request, Response, Router } from "express";
import { DeleteDriverController, DriverController, FetchedAllDriverController, FetchedDriverController, UpdateDriverController } from "../../controllers/driver-controller";
import { isAdmin } from "../../middlewares";
import { upload } from "../../../helper/multer";
import fs from 'fs';


const routes = Router();

routes.post("/add-driver", isAdmin, DriverController)
routes.get("/driver/:id", isAdmin, FetchedDriverController)
routes.get("/drivers", isAdmin, FetchedAllDriverController)
routes.delete("/driver/:id", isAdmin, DeleteDriverController)
routes.put("/driver/:id", isAdmin, UpdateDriverController)

//Driver profile ...
routes.post('/upload', (req: Request, res: Response) => {
    upload(req, res, async (err) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Error uploading files.' });
        }
        const uploadedFiles = req.files as Express.Multer.File[];
        const uploadedFilePaths = uploadedFiles.map(file => `${process.env.BASE_URL}/driver/${file.filename}`);
        try {
            await Promise.all(uploadedFilePaths.map(async (filePath) => {
                console.log({ filePath })
                if (fs.existsSync(filePath)) {
                    fs.unlinkSync(filePath);
                }
            }));

            return res.json({
                success: true,
                message: 'Files uploaded successfully.',
                filePaths: uploadedFilePaths
            });
        } catch (error) {
            return res.status(500).json({ success: false, message: 'Error handling files.' });
        }
    });
});

// Driver license documents... 
routes.post('/upload-license-documents', (req: Request, res: Response) => {
    upload(req, res, async (err) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Error uploading files.' });
        }
        const uploadedFiles = req.files as Express.Multer.File[];
        const uploadedFilePaths = uploadedFiles.map(file => `${process.env.BASE_URL}/driver-license-documents/${file.filename}`);
        try {
            await Promise.all(uploadedFilePaths.map(async (filePath) => {
                console.log({ filePath })
                if (fs.existsSync(filePath)) {
                    fs.unlinkSync(filePath);
                }
            }));

            return res.json({
                success: true,
                message: 'Files uploaded successfully.',
                filePaths: uploadedFilePaths
            });
        } catch (error) {
            return res.status(500).json({ success: false, message: 'Error handling files.' });
        }
    });
});

// Driver onboarding documents ... 
routes.post('/driver-onboarding-documents', (req: Request, res: Response) => {
    upload(req, res, async (err) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Error uploading files.' });
        }
        const uploadedFiles = req.files as Express.Multer.File[];
        const uploadedFilePaths = uploadedFiles.map(file => `${process.env.BASE_URL}/driver-onboarding-documents/${file.filename}`);
        try {
            await Promise.all(uploadedFilePaths.map(async (filePath) => {
                console.log({ filePath })
                if (fs.existsSync(filePath)) {
                    fs.unlinkSync(filePath);
                }
            }));

            return res.json({
                success: true,
                message: 'Files uploaded successfully.',
                filePaths: uploadedFilePaths
            });
        } catch (error) {
            return res.status(500).json({ success: false, message: 'Error handling files.' });
        }
    });
});

export default routes;