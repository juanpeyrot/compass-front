import { Hero } from "./components/hero";
import { Navbar } from "./components/navbar";


export const App = () => {
	return (
		<div className="min-h-screen bg-background flex flex-col">
			<Navbar />
			<Hero />
		</div>
	)
}