export interface Props {
    x: number;
    y: number;
}

export class Value {
    private value = 10
    private props: Props = { x: 0, y: 0 };

    getValue(): number {
        return this.value;
    }

    setValue(value: number): void {
        this.value = value;
    }

    setProps(props: Props) {
        this.props = props;
    }

    getProps(): Props {
        return this.props;
    }
}

