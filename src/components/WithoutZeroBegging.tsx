function WithoutZeroBeginning(setter: React.Dispatch<React.SetStateAction<string>>) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value
        const cleaned = raw.replace(/^0+(?!$)/, "") || "0";
        setter(cleaned)
 }
}

export default WithoutZeroBeginning