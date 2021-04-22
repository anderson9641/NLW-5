import { Router } from "express";
import { getCustomRepository } from "typeorm";
import { SettingsController } from "./controllers/SettingsController";
import { SettingsRepository } from "./repositores/SettingsRepository";

const routes = Router()

const settingController = new SettingsController();

routes.post("/settings", settingController.create)

export { routes }