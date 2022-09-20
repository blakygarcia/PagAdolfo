//metodo para que no tenga espacios en blanco
export const regexNoWhitSpace = (value: string) => { return value.replace(/\s+/g, '') };