import type { Fotos } from "./fotos"

export interface Cultura {
    attributes?: {
        tituloES: string,
        tituloEN: string,
        descripcionES: string,
        descripcionEN: string,
        paisDestacado: string,
        foto: Fotos
    }
}