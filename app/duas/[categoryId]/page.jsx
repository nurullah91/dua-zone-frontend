import React from 'react';
import duaCardLogo from '@/public/duacard.svg'
import Image from 'next/image';
import { IoCopyOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { IoBulbOutline } from "react-icons/io5";
import { FaShareAlt } from "react-icons/fa";
import { TbInfoOctagon } from "react-icons/tb";


async function getDuas(categoryId) {
    const res = await fetch(`http://localhost:5000/api/dua/${categoryId}`, {
        next: {
            revalidate: 60
        }
    })
    return res.json()
}


const CategoryDua = async ({ params }) => {

    const categoryId = params.categoryId;
    const duas = await getDuas(categoryId);
    console.log(duas);

    return (
        <div>
            <div>
                {
                    duas.map((dua, index) => <div className='my-5 p-6 bg-base-100 rounded-xl' key={dua.dua_id}>

                        <div className='flex items-center gap-3'>
                            <Image src={duaCardLogo} alt='icon' />
                            <h3 className="font-semibold text-green-600">{index + 1}. {dua.dua_name_en}</h3>
                        </div>

                        <div className='text-xl'>
                            {dua.top_en && <p className='mt-5'>{dua.top_en}</p>}
                            {dua.dua_arabic && <p className='text-right text-2xl tracking-wider font-bold my-8'>{dua.dua_arabic}</p>}
                            {dua.transliteration_en && <p className='italic my-5 text-slate-700'><span className='font-semibold text-xl '>Transliteration: </span>{dua.transliteration_en}</p>}
                            {dua.translation_en && <p className='my-5 text-slate-600'><span className='font-semibold'>Translation: </span>{dua.translation_en}</p>}
                            {dua.bottom_en && <p className='mt-5 text-slate-600'>{dua.bottom_en}</p>}
                        </div>

                        {dua.refference_en && <div className='mt-5'>
                            <h4 className="text-green-600 font-bold">Reference:</h4>
                            <p className='mt-1 text-xl mb-5'>{dua.refference_en}</p>

                        </div>}

                        <div className='flex justify-between items-center mt-8'>
                            <div>Audio</div>
                            <div className="flex gap-4">
                                <div>
                                    <IoCopyOutline className='text-slate-500 text-2xl' />
                                </div>
                                <div>
                                    <CiBookmark className='text-slate-500 text-2xl' />
                                </div>
                                <div>
                                    <IoBulbOutline className='text-slate-500 text-2xl' />
                                </div>
                                <div>
                                    <FaShareAlt className='text-slate-500 text-2xl' />
                                </div>
                                <div>
                                    <TbInfoOctagon className='text-slate-500 text-2xl' />
                                </div>

                            </div>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default CategoryDua;