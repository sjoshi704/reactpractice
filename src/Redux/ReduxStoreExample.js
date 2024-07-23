import React from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { store } from './Store'
import { decrement, increment, incrementByAmount, decrementByAmount } from './CounterSlice'
import { addUser, deleteUser } from './UserSlice'

export default function ReduxStoreExample() {
    return <>
        <Provider store={store}>
            <div className='h3 text-warning font-weight-bold text-center'>Redux Store Example</div>
            <ReduxCounterExample> </ReduxCounterExample>
            <ReduxUserExample> </ReduxUserExample>
        </Provider>
    </>
}

function ReduxCounterExample() {
    const count = useSelector((state) => state.counter.count)
    const dispatch = useDispatch()
    return <>
        <div> Count :{count}
            <br />
            <button className='btn btn-danger' onClick={() => dispatch(increment())}>Increment</button>
            <button className='btn btn-success ml-2' onClick={() => dispatch(decrement())}>Decrement</button>
            <button className='btn btn-primary ml-2' onClick={() => dispatch(incrementByAmount(5))}>Increment By 5</button>
            <button className='btn btn-warning ml-2' onClick={() => dispatch(decrementByAmount(3))}>Decrement By 3</button>


        </div>
    </>
}


function ReduxUserExample() {
    const users = useSelector((state) => state.users)
    const dispatch = useDispatch()
    return <>
        <div>
            Total Users:{users.length}
            <div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th> Id</th>
                            <th> Name</th>

                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => {
                            return <tr key={user.id}>
                                <td> {user.id}</td>
                                <td> {user.name}</td>

                            </tr>
                        })}

                    </tbody>
                </table>
            </div>
            <button type="button" className='btn btn-success' onClick={()=>dispatch(addUser({
                id:users.length+1,
                name:"Saurabh"+users.length,
            }))}>Add User</button>

<button type="button" className='btn btn-danger' onClick={()=>dispatch(deleteUser({
                id:users.length-1,
                name:"Saurabh"+users.length,
            }))}>Delete User</button>

        </div>
    </>
}