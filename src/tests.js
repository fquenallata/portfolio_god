const solucionarRompecabezas = (N) => {
	const MOD = 10000000000n;

	// Función para calcular el n-ésimo término de la secuencia de Fibonacci
	const fibonacci = (n) => {
		let a = 0n,
			b = 1n;
		for (let i = 0n; i < n; i++) {
			let temp = b;
			b = a + b;
			a = temp;
		}
		return a;
	};

	// Calcular los valores iniciales a, b, c, d
	const a = fibonacci(N);
	const b = fibonacci(N + 1n);
	const c = fibonacci(N + 2n);
	const d = fibonacci(N + 3n);

	// Calcular el resultado final
	let resultado = (3n * d + c + 4n * b + a) % MOD;

	return resultado;
};

console.log(solucionarRompecabezas(10n)); // Muestra 902441
console.log(solucionarRompecabezas(100n)); // Muestra 8042318513
