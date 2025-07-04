function AllowOnlyNumbers(e: React.KeyboardEvent<HTMLInputElement>) {
    const allowedKeys = ["Backspace", "ArrowLeft", "ArrowRight", "Tab", "Delete"];
    
    if (!/[0-9]/.test(e.key) && !allowedKeys.includes(e.key)) {
        e.preventDefault()
    }
}


export default AllowOnlyNumbers;
