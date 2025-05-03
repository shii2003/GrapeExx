import React from 'react';

type AskTableProps = {

};

const AskTable: React.FC<AskTableProps> = () => {

    return (
        <div
            style={{ backgroundColor: "rgba(239, 68, 68, 0.3)" }}
            className='w-full flex justify-between items-center text-sm px-2 font-semibold'

        >
            <div>
                147.88
            </div>
            <div>
                84.94
            </div>
            <div>
                695.36
            </div>
        </div>
    )
}
export default AskTable;