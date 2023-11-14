import React from 'react'

function Footer() {
  return (
    <footer className="bg-white py-4 mt-auto">
    <div className="container px-5">
        <div className="row align-items-center justify-content-between flex-column flex-sm-row">
            <div className="col-auto">
                <div className="small m-0">Copyright &copy; CPE Y1 TEAM8</div>

            </div>
            <div className="col-auto">
                <div className="d-flex justify-content-center fs-4 gap-4">
                    <a className="text-gradient" href="#!"><i className="bi bi-person-lines-fill"></i></a>
                    <a className="text-gradient" href="#!"><i className="bi bi-line"></i></a>
                    <a className="text-gradient" href="#!"><i className="bi bi-facebook"></i></a>
                </div>
            </div>
        </div>

    </div>
</footer>
  )
}

export default Footer