// This type is a utility type that will extract mustache tags and type the params object
export type ParamsRecord<
    URLString extends string,
    Params = Record<string, string>,
> =
    // Use infer to match the start (Head) {mustache part} and reset (Tail) of the string
    /* eslint-disable */
    URLString extends `${infer Head}{${infer Parameter}}${infer Tail}`
        ? // If it finds a mustache tag it will add that to the params object and call ParamsRecord utility type to continue through rest of the string (Tail)
          ParamsRecord<Tail, Params & { [P in Parameter]: string }>
        : // Return the params if no more tags are found
          Params;
/* eslint-enable */
