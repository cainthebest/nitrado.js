export declare type ParamsRecord<URLString extends string, Params = Record<string, string>> = URLString extends `${infer Head}{${infer Parameter}}${infer Tail}` ? ParamsRecord<Tail, Params & {
    [P in Parameter]: string;
}> : Params;
