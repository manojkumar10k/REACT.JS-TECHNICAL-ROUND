import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Profile() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user');
    toast.success("Log out successful");
    navigate('/');
    window.location.reload()
  };

  return (
    <div
      className="vh-100 d-flex justify-content-center align-items-center"
      style={{
        backgroundColor: '#f0f4f8', // Light background color
        backgroundImage: 'url(https://www.w3schools.com/w3images/forestbridge.jpg)', // Optional background image
        backgroundSize: 'cover', // Ensure the background image covers the entire screen
        backgroundPosition: 'center', // Center the background image
        backgroundAttachment: 'fixed', // Keep the background fixed on scroll
      }}
    >
      <div className="row w-100 justify-content-center">
        <div className="col-md-9 col-lg-7 col-xl-5 mx-auto mt-5">
          <div className="card shadow-lg border-0 rounded-4" style={{ minHeight: '60vh' }}>
            <div className="card-body d-flex flex-column justify-content-center align-items-center p-4">
              {/* User Avatar */}
              <div className="d-flex justify-content-center mb-4">
                <div className="flex-shrink-0">
                  <img
                    style={{ width: '120px', height: '120px', borderRadius: '50%' }}
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                    alt="User Avatar"
                    className="img-fluid"
                  />
                </div>
              </div>

              {/* User Name and Email */}
              <h4 className="card-title text-primary text-center">{user.name}</h4>
              <p className="card-text text-muted text-center">{user.email}</p>

              {/* Stats Section */}
              <div className="d-flex justify-content-center rounded-3 p-3 mb-3 bg-light w-100">
                <div className="me-4 text-center">
                  <p className="small text-muted mb-1">Articles</p>
                  <p className="mb-0">41</p>
                </div>
                <div className="me-4 text-center">
                  <p className="small text-muted mb-1">Followers</p>
                  <p className="mb-0">976</p>
                </div>
                <div className="text-center">
                  <p className="small text-muted mb-1">Rating</p>
                  <p className="mb-0">8.5</p>
                </div>
              </div>

              {/* Logout Button */}
              <div className="d-flex pt-1 w-100 justify-content-center">
                <button
                  className="btn btn-danger w-50 py-2 rounded-3"
                  onClick={handleLogout}
                >
                  LOG OUT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
