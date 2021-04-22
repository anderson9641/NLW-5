import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SettingService } from "../services/SettingService";


class SettingsController {

    async create(request: Request, response: Response) {
        const { chat, username } = request.body;


        const settingService = new SettingService();

        try {
            const settings = await settingService.create({ chat, username });

            return response.json(settings);
            
        } catch (error) {
            return response.status(400).json({
                message : error.message,
            })
        }
    }

}

export { SettingsController }