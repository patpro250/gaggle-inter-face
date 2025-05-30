export function cleanFormData<T extends Record<string, any>>(data: T): Partial<T> {
    return Object.fromEntries(
        Object.entries(data).filter(
            ([_, value]) => value !== ""
        )
    ) as Partial<T>;
}