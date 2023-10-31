import {TransactionsTable, TableHead, HeadItem, Item } from './transactions.styled'

export const TransactionHistory = ({items}) => {
    return (
        <TransactionsTable>
            <TableHead>
                    <tr>
                    <HeadItem>Type</HeadItem>
                    <HeadItem>Amount</HeadItem>
                    <HeadItem>Currency</HeadItem>
                    </tr>
            </TableHead>
            <tbody>
                {items.map(({ id, type, amount, currency }) => (
                    <tr key={id}>
                        <Item>{type}</Item>
                        <Item>{amount}</Item>
                        <Item>{currency}</Item>
                    </tr>
                ))}
            </tbody>
            
        </TransactionsTable>
    );
}