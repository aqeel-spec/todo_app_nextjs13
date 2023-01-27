

export const handleDelete = async (commentId: any) => {
    const res = await fetch(`/api/todos/${commentId}`, {
      method: "DELETE",
    });
    const data = res.json();
    console.log('todo deleted : ',data);
    //fetchComments();
};