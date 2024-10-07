import { useEffect, useRef, useState } from "react"

export const ControlledInput = (props) => {
    const { value, onChange, ...rest } = props
    const [ cursor, setCursor ] = useState(null)
    const ref = useRef(null)

    useEffect(() => {
        const input = ref.current
        if (input) input.setSelectionRange(cursor, cursor)
    }, [cursor, ref, value])
const handleChange = (e) => {
    setCursor(e.target.selectionStart)
    onChange(e.target.value)
}
return <input ref={ref} value={value} onChange={handleChange} {...rest} />
}