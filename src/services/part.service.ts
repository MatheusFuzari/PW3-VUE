import type { PartsResponse } from "@/models/Parts";
import {getAxios} from "./service.config";

export const getParts = (): Promise<PartsResponse> => {
    return getAxios().get("/parts");
}

