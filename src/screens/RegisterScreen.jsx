import { useRef } from "react";

function RegisterScreen() {

    const pseudoInputRef = useRef();
    const pseudoFeedbackRef = useRef();

    const handlePseudoBlur = async (e) => {
        console.log(e.target.value);
        const url = "http://api.php-blog-project.loc/auth/check/pseudo";
        const options = {
            method: "POST",
            body: JSON.stringify({pseudo: e.target.value}),
        }
        const response = await fetch(url, options);
        console.log(response);
        if (!response.ok) {
            throw new Error('Erreur de réseau');
        }
        const text = await response.text();
        try {
            const json = JSON.parse(text);
            console.log(json);
            if(json.result){
                pseudoInputRef.current.classList.remove("border-danger", "text-danger");
                pseudoInputRef.current.classList.add("border-success","text-success");
                pseudoFeedbackRef.current.classList.remove("text-danger");
                pseudoFeedbackRef.current.classList.add("text-success");
                pseudoFeedbackRef.current.innerHTML = "&#10003;";
            }
            else{
                pseudoInputRef.current.classList.add("border-danger", "text-danger");
                pseudoInputRef.current.classList.remove("border-success","text-success");
                pseudoFeedbackRef.current.classList.add("text-danger");
                pseudoFeedbackRef.current.classList.remove("text-success");
                pseudoFeedbackRef.current.innerText = "Ce pseudo est déjà pris.";
            }

        } catch {
            console.log("Error", text);
        }
    }

    const handlePseudoChange = () => {
        pseudoInputRef.current.classList.remove("border-danger", "text-danger");
        pseudoInputRef.current.classList.remove("border-success","text-success");
        pseudoFeedbackRef.current.innerText = "";
    }

    return (
        <>
            <section className="vh-100" style={{ backgroundColor: "#eee" }}>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div
                                className="card text-black"
                                style={{ borderRadius: "25px" }}
                            >
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                                                Sign up
                                            </p>

                                            <form className="mx-1 mx-md-4">
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div
                                                        data-mdb-input-init
                                                        className="form-outline flex-fill mb-0"
                                                    >
                                                        <input ref={pseudoInputRef}
                                                            type="text"
                                                            id="form3Example1c"
                                                            className="form-control"
                                                            name="pseudo"
                                                            onBlur={handlePseudoBlur}
                                                            onChange={handlePseudoChange}
                                                        />
                                                        <label
                                                            className="form-label"
                                                            htmlFor="form3Example1c"
                                                        >
                                                            Your Name <span ref={pseudoFeedbackRef} className="pseudo-feedback fw-bold"></span>
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div
                                                        data-mdb-input-init
                                                        className="form-outline flex-fill mb-0"
                                                    >
                                                        <input
                                                            type="email"
                                                            id="form3Example3c"
                                                            className="form-control"
                                                        />
                                                        <label
                                                            className="form-label"
                                                            htmlFor="form3Example3c"
                                                        >
                                                            Your Email
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div
                                                        data-mdb-input-init
                                                        className="form-outline flex-fill mb-0"
                                                    >
                                                        <input
                                                            type="password"
                                                            id="form3Example4c"
                                                            className="form-control"
                                                        />
                                                        <label
                                                            className="form-label"
                                                            htmlFor="form3Example4c"
                                                        >
                                                            Password
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                    <div
                                                        data-mdb-input-init
                                                        className="form-outline flex-fill mb-0"
                                                    >
                                                        <input
                                                            type="password"
                                                            id="form3Example4cd"
                                                            className="form-control"
                                                        />
                                                        <label
                                                            className="form-label"
                                                            htmlFor="form3Example4cd"
                                                        >
                                                            Repeat your password
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className="form-check d-flex justify-content-center mb-5">
                                                    <input
                                                        className="form-check-input me-2"
                                                        type="checkbox"
                                                        value=""
                                                        id="form2Example3c"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="form2Example3"
                                                    >
                                                        I agree all statements
                                                        in{" "}
                                                        <a href="#!">
                                                            Terms of service
                                                        </a>
                                                    </label>
                                                </div>

                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button
                                                        type="button"
                                                        data-mdb-button-init
                                                        data-mdb-ripple-init
                                                        className="btn btn-primary btn-lg"
                                                    >
                                                        Register
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                            <img
                                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                className="img-fluid"
                                                alt="Sample image"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default RegisterScreen;
