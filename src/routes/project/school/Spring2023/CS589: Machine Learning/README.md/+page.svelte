<script>
	import { goto } from '$app/navigation';
	import Code from '$lib/components/highlight/Code.svelte';

	let backward = `
def _backward(self, delta: list, activation: list, gradients: list, training_index: int): 
    delta = self._computeDeltaHidden(delta = delta, activation = activation)
    gradients_b4_regularized = self._updateGradients(delta = delta, activation = activation, gradients = gradients, instance_num = training_index)
    return gradients_b4_regularized
    `;
	let forward = `
def _forward(self, instance_attributes=None, instance_class=None):
    activation = []
    activation_layer = instance_attributes

    activation_layer = np.insert(activation_layer, 0, 1)
    activation.append(activation_layer)
    for layer in range(1, len(self.network_structure) - 1):
        layer_weight   = self.weights_matrix[layer - 1]
        sigmoid_vector = layer_weight @ activation_layer 
        activation_layer = [self._sigmoid(z) for z in sigmoid_vector]
        activation_layer = np.insert(activation_layer, 0, 1)
        activation.append(activation_layer)

    sigmoid_vector = self.weights_matrix[-1] @ activation_layer
    activation_layer = [self._sigmoid(z) for z in sigmoid_vector]
    activation.append(activation_layer)
    prediction_vector = activation_layer
    return activation, prediction_vector 
`;
</script>

<svelte:head>
	<title>Machine Learning</title>
	<meta name="description" content="Machine Learning" />
</svelte:head>

<div class="mt-2 text-gray-700">
	<h1 class="text-xl font-bold text-gray-900">CS589: Machine Learning</h1>

	<h2 class="text-sm font-semibold text-gray-700 mt-1">
		Course Description: This course will introduce core machine learning models and algorithms for
		classification, regression, clustering, and dimensionality reduction. On the theory side, the
		course will cover the mathematical foundations underlying the most commonly-used machine
		learning algorithms. It will focus on understanding models and the relationships between them.
		On the applied side, the course will focus on effectively using machine learning methods to
		solve real-world problems with an emphasis on model selection, regularization, design of
		experiments, and presentation and interpretation of results. The course will have assignments
		that involve both mathematical problems and implementation tasks. Broad topics covered in this
		course will include classification algorithms in general, decision trees, random forests,
		probabilistic models, Naive Bayes methods, various ensemble meta-algorithms (such as bagging and
		boosting), gradient-based techniques, linear regression, logistic regression, neural networks,
		convolutional neural networks and deep learning, unsupervised learning and clustering
		algorithms, k-means, hierarchical clustering, and dimensionality reduction techniques.
	</h2>

	<hr class="divide-solid border-slate-500 mt-1 border-1" />

	<h1 class="text-xl font-extralight mt-1">My Course Reflection</h1>

	<p class="mt-1 text-gray-700 font-serif">
        I took this course in Spring 2023. My God, this course was a great introduction to the core machine learning models.
        We learned and implemented KNN, Decision Trees, Random Forest, Naive Baives, Neural Networks, and so on. The homework 
        was time consuming, but it was rewarding to see how much I have learned from the course. This course wasn't diffcult
        at all, but must pay attention to the details and slides. Buidling everything from scratch was the most rewarding part.
	</p>

	<h1 class="text-xl font-extralight mt-1">
		Code demonstration of Forward and Backward Propagation in Neutral Network
	</h1>
	<Code language="python" code={forward} />
	<Code language="python" code={backward} />
</div>

<div class="flex mt-5 justify-center items-center gap-3">
	<button
		class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
		on:click={() => goto('/project/school/Spring2023/CS453: Computer Networks/README.md')}
	>
		Prev
	</button>
	<button
		class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
		on:click={() => goto('/project/school/Summer2023/CS490STA: Scalable Web Systems/README.md')}
	>
		Next
	</button>
</div>
