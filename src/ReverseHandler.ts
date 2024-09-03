import { Component } from "react";

export default function reverseHandler<T extends Component<{},{ nicks: string[] }>>(this: T) {
    this.setState((prevState) => ({
        nicks: [...prevState.nicks].reverse(),
    }));
}
