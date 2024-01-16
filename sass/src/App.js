import React, { useEffect, useState } from "react";
import Posts from "./Posts";

function App() {
	const [isLoading, setIsLoading] = useState(false);
	const [postId, setPostId] = useState("");
	const [postList, setPostList] = useState([]);

	const handelSearchPost = async (postId = "") => {
		if (isLoading) return;

		setIsLoading(true);
		const result = await getPost(postId);
		setIsLoading(false);

		if (result.error) {
			setIsLoading(false);
			return alert("Error in your request!");
		} else if (postId && !result.id) {
			return alert("Post not found!");
		} else if (postId) {
			setPostList([result]);
		} else {
			setPostList(result);
		}
	};
	const getPost = async (id = "") => {
		try {
			const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
			return await response.json();
		} catch (error) {
			return { error: true };
		}
	};

	useEffect(() => {
		handelSearchPost();
	}, []);

	return (
		<div className="container">
			<div className="search">
				<form
					className="search__form"
					onSubmit={(e) => {
						e.preventDefault();
						handelSearchPost(postId);
					}}
				>
					<input
						type="text"
						className="search__input"
						value={postId}
						onChange={(e) => setPostId(e.target.value)}
						placeholder="Enter a Post ID...."
						autoFocus
					/>
					<button type="submit" className="search__btn">
						Search
					</button>
				</form>
			</div>

			{!isLoading && <Posts posts={postList} />}
			{isLoading && <span className="loader"></span>}
		</div>
	);
}

export default App;
