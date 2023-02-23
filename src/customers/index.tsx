import { NextPage, GetStaticProps, InferGetStaticPropsType } from 'next';
import { MongoClient,ObjectId } from 'mongodb';
import axios from 'axios';
import React from 'react';

export type Customer = 
{
    _id: ObjectId;
    name: string;
}
export const getStaticProps: GetStaticProps = async(context)=>{
    const mongoClient = new MongoClient('mongodb+srv://ialsanto:pZA9lGjyKDkqqgvy@customers.q2nfot5.mongodb.net/?retryWrites=true&w=majority')
    const data = await mongoClient
    .db()
    .collection('Customers')
    .find({})
    .toArray();
    console.log('!!!',data)

    const result = await axios.get<{
        customers: Customer [];
        }>('http://127.0.0.1:8000/api/customers/');
        console.log(result.data.customers);
        return {
            props: 
            {
                customers: JSON.parse(JSON.stringify(data)),
            },
                revalidate: 60,
        };
    };
export const Customers: NextPage = ({
    customers,
    }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <>
            <h1>Customers</h1>
            {customers.map((customer: Customer) => {
                    return (
                    <div key={customer._id.toString()}>
                    <p>{customer.name}</p>
                    <p>{customer._id.toString()}</p>
                    </div>);
                })} 
        </>
    );
};
