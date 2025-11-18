## Interface আর Type এর মধ্যে পার্থক্য কী?

`Interface` আর `Type` দুটোকেই আমরা যেকোনো ্ভ্যরিয়েবল এর ধরণ বর্ণনা করতে ব্যবহার করি, কিন্তু দুটোর ব্যবহারিক কিছু পার্থক্য আছে। 
সাধারণত `Interface` ব্যবহার করা হয় `Object` ডিফাইন করার ক্ষেত্রে। `Interface` কে সুবিধামত `extends` কী-ওয়ার্ড ব্যবহার করে বাড়ানো যায়, আবার একই নামের একাধিক `Interface লিখলে TypeScript সেগুলোকে নিজে থেকেই merge করে ফেলে।
`Type` এর কাজও একইরকম, তবে `Type` একবার ডিক্লেয়ার করলে একই নামে আবার ডিক্লেয়ার করে merge করা যায় না। তবে টাইপের ক্ষেত্রে `|` এবং `&` অপারেটর ব্যবহার করে একাধিক টাইপের সমন্বয়ে সুবিধামত নতুন টাইপ তৈরি করে নেয়া যায়। `Array`, `Function` ইত্যাদির ধরণ ডিফাইন করার জন্য `Interface` এর তুলনায় `Type` ব্যবহার করা বেশি সুবিধাজনক, কারণ এর `Syntax` অপেক্ষাকৃত সহজ।
`Interface` এবং `Type` এর মধ্যে আরেকটি পার্থক্য রয়েছে এদের ডেফিনিশন এর পদ্ধতিতে। নিচে উদাহরণ দেয়া হলোঃ
```ts
type User = {
  name: string;
  age: number;
};

interface IUser {
  name: string;
  age: number;
}
```

## Union এবং Intersection টাইপের উদাহরণ

Union:
```ts
type Bus = {
  fare: number;
  time: string;
};

type Train = {
  name: string;
  time: string;
};

type Result = Bus | Train;
```

Intersection:
```ts
type Student = {
  id: string;
};

type Captain = {
  hasBadge: boolean;
};

type SpecialAccess = Student & Captain;
```