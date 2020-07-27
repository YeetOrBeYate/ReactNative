export const actionTypes = {
    ADD_COURSE:'addCourse',
    EDIT_COURSE:'editCourse',
    DELETE_COURSE:'deleteCourse'
}

export const addCourse = (value)=>{
    return {type:actionTypes.ADD_COURSE, payload:{key:Math.random().toString(), value:value}}
}

export const deleteCourse = (id)=>{
    return {type:actionTypes.DELETE_COURSE, payload:id }
}