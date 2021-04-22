import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "../repositores/SettingsRepository";

interface ISettingsCreate {
    chat: boolean,
    username: string
}

class SettingService {

    async create({ chat, username }: ISettingsCreate) {
        const settingsRepository = getCustomRepository(SettingsRepository)

        const userAlreadyExists = await settingsRepository.findOne({username,});

        if(userAlreadyExists){
            throw new Error("user Already Exists! ")
        }

        const settings = settingsRepository.create({
            chat,
            username,
        });

        await settingsRepository.save(settings);

        return settings
    }

}

export { SettingService }