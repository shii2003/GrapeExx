import React from 'react';

type BidTableProps = {

};

const BidTable: React.FC<BidTableProps> = () => {

    return (
        <div
            style={{ backgroundColor: "rgba(34,197,94,0.3)" }}
            className='flex justify-between items-center text-sm font-semibold px-2'
        >
            <div>
                147.50
            </div>
            <div>
                131.82
            </div>
            <div>
                131.82
            </div>
        </div>
    )
}
export default BidTable;