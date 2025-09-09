import z, { array, ipv4, ipv6, promise } from 'zod';
//ZOD INTERSECTION AND MERGE (b7web)
const person = z.object({
    name: z.string(),
});

const employee = z.object({
    employeeId: z.string(),
});
//variable to hold the schema
const manager = person.merge(employee);
const manager2 = person.and(employee);
const manager3 = z.intersection(person, employee);
//const combustívelOptions = ['gasolina', 'alcool', 'diesel', 'flex'] as const;
const turnoOptions = ['manhã', 'tarde', 'noite'] as const;

//created a schema for an object with various validated fields
const objectSchema = z.object({
    //id: z.string().uuid(),
    //regra: z.string().startsWith('zN__').regex(/[a-z]{5}-[0-9]-{4}/g),
    //image:z.string().endsWith(".jpg"),
    //anoCorrente: z.union(z.string(), z.number()).optional(),
    arrayString: z.string().array().optional(),
    randomNumber: z.number().default(() => { return Math.floor(Math.random() * 100)}),
    anoCorrente: z.string().or(z.number()).optional(),
    name: z.string().toUpperCase().min(2).max(25),
    nickName: 
    z.string().nonempty({ message: "Nickname é obrigatório" })
    .min(2, { message: "Nickname deve ter pelo menos 2 caracteres" })
    .max(100, { message: "Nickname deve ter no máximo 100 caracteres" }),
    age: z.number().min(18).max(120),
    tempoServico: z.number().gte(5).lte(40).optional(),//.multipleOf(5).negative().nonnegative().int().finite()
    cargo: z.enum(manager).optional(),
    emailExample: z.email().toLowerCase().transform((val)=> val.split('@')[0] + '@example.com'),
    emailEnd: z.email().transform((val)=> { 
        return val.split('@')[1]
    }).optional(),
    combustível: z.enum(['gasolina', 'alcool', 'diesel', 'flex']).optional(),
    turno: z.enum(turnoOptions).optional(),
    url: z.string().url(),
    ipv4: z.ipv4().optional(),
    ipv6: z.ipv6().optional(),
    description: z.string().toUpperCase().trim(),
    exatamente: z.literal('test'),
    birthDate: z.date().optional(),
    qualquer: z.any().optional(),
    nunca: z.never().optional(),
        characteristics: z.array(z.object(
            {
            name: z.string(),
            value: z.number().min(1).max(120)
            }
        )
    )
});
/*
type User = {
    name: string;
    age: number;
    email: string;
}
*/
type User = z.infer<typeof objectSchema>; //above is equivalent to
//created a schema for an array of strings
const data_of_objectSchema = {
    arrayString: ["item1", "item2", "item3"],
    anoCorrente: "2024",
    //id:
    //regra: "zN__cde1234",
    //image:
    name: "John",
    nickName: "Doe",
    age: 30,
    emailExample: "JHON.DOE@example.com",
    url: "https://github.com/wernerAlecxander/reiDoFerroVelho/blob/master/package-lock.json",
    //ipv4:
    //ipv6:
    description: "            Hello            ",
    exatamente: "test",
    //birthDate: Mon Sep 08 2025 15:42:58,
    //qualquer: "qualquer coisa",
    //nunca: "qqq",
    characteristics: [
        {name: "married", value: 18}
    ]
};
//resultData will contain either the validated data or the validation errors
const resultData = objectSchema.safeParse(data_of_objectSchema);
//testing the validation result
if (!resultData.success) {
    console.error(resultData.error);
} else {
    console.log("Validation succeeded:", resultData.data);
}
//console.log(resultData);

//PROMISE 1
/*
const pattern = z.promise(z.object({
    age: z.number()
}));

const applicationData = Promise.resolve({ 
    age: 30 
});

const resultPattern = pattern.parseAsync(applicationData);
*/

//PROMISE 2
/*
//z.object fora do promise
const promises = z.object(
    {
    age: z.number()
    }
);

const apiResponse = z.promise(promises);

const result = Promise.resolve({
    age: 30
});

const resultPromises = apiResponse.parseAsync(result);
*/

//PROMISE 3 - ASYNC/AWAIT com z.object fora do promise
/*
const promises = z.object(
    {
    age: z.number()
    }
); 
const apiResponse = z.promise(promises);

const result = Promise.resolve({
    age: 30
});
async function fetchData() {
    try {
        const resultPromises = await apiResponse.parseAsync(result);
        console.log("Validation succeeded:", resultPromises);
    } catch (error) {
        console.error("Validation failed:", error);
    }
}
fetchData();
*/
//PROMISE 3 - ASYNC/AWAIT com z.object dentro do promise
//z.object dentro do promise
const promises = z.promise(z.object(
    {
    age: z.number()
    }
));
//const apiResponse = z.promise(promises);

const result = Promise.resolve({
    age: 30
});
async function fetchData() {
    try {
        const resultPromises = await promises.parseAsync(result);
        console.log("Validation succeeded:", resultPromises);
    } catch (error) {
        console.error("Validation failed:", error);
    }
}

fetchData();