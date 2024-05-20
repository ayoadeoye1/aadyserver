import * as bcrypt from "bcrypt";

export class Bcrypt {
    public static async encryptPsw(password: string) {
        return await bcrypt.hash(password, 12);
    }

    public static async validatePsw(password: string, hpassword: string) {
        return await bcrypt.compare(password, hpassword);
    }
}
