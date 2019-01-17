export interface Options {
    material: string;
    backlight: boolean;
}

export type Optional<T> = { [k in keyof T]?: T[k]; };
export type Nullable<T> = { [k in keyof T]: T[k] | null };
export type ReadOnlyOptions = Readonly<Options>;
export type OptionalOptions = Optional<Options>;
export type NullableOptions = Nullable<Options>;

let x: ReadOnlyOptions = { material: "new", backlight: false };
console.log(x);
let y: OptionalOptions = { backlight: true };
console.log(y);

export class MyOptions implements ReadOnlyOptions {
    constructor(public material: string, public backlight: boolean) { }
    setMaterial(m: string) {
        this.material = m;
    }
}
