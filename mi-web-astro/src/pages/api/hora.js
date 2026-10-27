
export async function GET(){
        const fecha = new Date().toLocaleDateString()
        const hora = new Date().toLocaleTimeString()
        return new Response(
            JSON.stringify({lafecha : fecha,
                            lahora : hora,
                                msg : "Hola"
            }),
            { headers: {"Content-Type":"application/json"} }
    )
}

