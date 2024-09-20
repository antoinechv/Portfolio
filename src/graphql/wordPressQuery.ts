interface gqlParams {
    query: String;
    variables?: object;
}

export async function wpquery({ query, variables = {} }: gqlParams) {
    const res = await fetch('https://portfoliocms.antoinechauveau.com/graphql', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Cache-Control": "no-cache", // Ajoute ce header pour éviter le cache
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    });

    if (!res.ok) {
        console.error('Error fetching data:', res);
        return {};
    }

    const { data } = await res.json();
    console.log('Fetched data:', data); // Log des données
    return data;
}
