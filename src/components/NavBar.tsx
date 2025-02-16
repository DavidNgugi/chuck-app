import { Link } from 'react-router-dom';

export const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<Link
					to={`/`}
					type="button"
					className="navbar-brand"
				>Chuck</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link
								to={`/`}
								type="button"
								className="nav-link active"
							>Home</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};