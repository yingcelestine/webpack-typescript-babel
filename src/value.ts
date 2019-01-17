export interface Props {
    x: number;
    y: number;
}

export interface XAndY {
    x: number;
    y: number;
}

export class Value {
    private value: number = 10;
    private props: XAndY = { x: 0, y: 0 };
    private password: string = "xxx";

    getValue(password: string): number {
        if (password == this.password) {
            return this.value;
        } else {
            return -1;
        }
    }

    setValue(value: number): void {
        if (value > 0) {
            this.value = value;
        }
    }

    setProps(props: Props) {
        this.props = props;
    }

    getProps(): Props {
        return this.props;
    }
}

