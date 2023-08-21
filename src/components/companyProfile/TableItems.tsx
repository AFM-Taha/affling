
interface ITableItems {
    item:string
    value:string | number
}

const TableItems: React.FC<ITableItems>= ({item, value}) => {


    return (
        <div className="text-black  font-normal text-start leading-relaxed flex   gap-x-3 text-sm bg-neutral-200 mb-5">
            <p className="w-72">{item}</p>
            <p className="">{value}</p>
        </div>
    );
};

export default TableItems;