import DOMPurify from 'dompurify';

function SanitizingInputs(value)
{
    const sanitizedInput=DOMPurify.sanitize(value);
    return sanitizedInput;
}

export default SanitizingInputs;