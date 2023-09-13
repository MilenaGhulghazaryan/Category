import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GetCategories } from "./CategoriesSlice"
import { GetGenders } from "./GenderSlice"
import { useSearchParams } from "react-router-dom";
import './Category.css'
const Category = () => {
    const dispatch = useDispatch()
    const category = useSelector(state => state.category.category)

    useEffect(() => {
        dispatch(GetCategories())
        dispatch(GetGenders())
    }, [])
    const [searchParams, setSearchParams] = useSearchParams()
    const genderQuery = +searchParams.get('gender')

    return (
        <div >
            <div className="btns">
                {
                    genders.map(({ id, title }) => {
                        return (
                            <button onClick={() => {
                                setSearchParams({
                                    gender: id
                                })
                            }}
                                className={id === genderQuery ? "active" : ""}>
                                {/* {id === 1 ? 'Female' : 'Male'} */}
                                {title}
                            </button>
                        )
                    })
                }
            </div>
            <div className='images'>
                {
                    category?.map(({ id, title, parentId, image }) => {

                        if (parentId === genderQuery) {

                            return (
                                <div key={id}>
                                    {/* {title} */}
                                    <img src={image} style={{ width: '220px', height: '250px' }} />
                                </div>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
}
export default Category