import type { Fotos } from "./fotos"

export interface Esenciales {
    attributes?: {
        esObligatorio?: boolean,
        isGivenByUS: boolean,
        tituloES: string,
        tituloEN: string,
        descripcionES: string,
        descripcionEN: string,
        foto: Fotos
    }
}