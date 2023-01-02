import {useEffect, useState} from 'react';
import axios from "axios";
import EsclubNavbar from "../EsclubNavbar";

function AdminPage() {

    const [users, setUsers] = useState<any[]>([]);
    const [clubs, setClubs] = useState<any[]>([]);
    const [currentRole, setCurrentRole] = useState<String>("");
    const [currentClubId, setCurrentClubId] = useState<any>("");
    const [selectedUserId, setSelectedUserId] = useState<any[]>([]);
    const [status, setStatus] = useState<any>("");

    useEffect(() => {
        console.log(currentClubId)
    }, [currentClubId]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/v1/users',).then((response) => {
            setUsers(response.data);
        })

        axios.get('http://localhost:8080/api/v1/clubs',).then((response) => {
            setClubs(response.data);
        })
    }, []);

    const handleUpdate = (userId: number, role: String, clubId: any) => {
        console.log(userId, role, clubId)
        axios.put('http://localhost:8080/api/v1/users/update-role', {
            userId: userId, role: role, clubId: clubId
        }).then((response) => {
            setStatus(response.status);
        });
    }

    return (<>
        <EsclubNavbar/>
            <h1 className="display-4">EsClub Users</h1>
            <div className="container">
                {status === 200 ? <div className="alert alert-success" role="alert" style={{width:"50%", marginLeft:"25%"}}>
                    Kayıt Başarıyla Güncellendi
                </div> : null}
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Username</th>
                        <th scope="col">email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Club</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users?.map((user: any) => (<tr key={user.id}>
                            <th scope="row">{user.id}</th>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{<select className="form-select-sm" aria-label=".form-select-sm example"
                                         onChange={(e: any) => {
                                             setCurrentRole(e.target.value)
                                             setSelectedUserId(user?.id)
                                         }}>
                                <option selected>{user.role}</option>
                                <option disabled>----------</option>
                                <option value="ADMIN">ADMIN</option>
                                <option value="CLUB_ADMIN">CLUB_ADMIN</option>
                                <option value="USER">USER</option>
                            </select>}</td>
                            <td>{
                                <select className="form-select" aria-label=".form-select-sm example"
                                        onChange={(e: any) => setCurrentClubId(e.target.value)}>
                                <option selected>{user.club?.clubName}</option>
                                <option disabled>----------</option>
                                {clubs?.map((club: any) => (<option value={club?.id}>{club?.clubName}</option>))}
                            </select>}</td>
                            <td>
                                <button type="button" className="btn btn-primary"
                                        onClick={() => handleUpdate(user.id, currentRole, currentClubId)}>Save
                                </button>
                            </td>
                        </tr>))}
                    </tbody>
                </table>
            </div>
        </>);
}

export default AdminPage;