import { evaluate } from "mathjs";

export const calculate = (value : string) => {
    try {
        const result = evaluate(value);
        return result.toString();
    } catch (error) {
        alert("Invalid expression!");
        console.error(error);
        return 0;
    }
}