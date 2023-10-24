const foodCard = (values) => {
    return `<div class="border border-dark position-relative">
                <div>${values.name}</div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Kcal</th>
                                <th>CAR</th>
                                <th>PRO</th>
                                <th>FAT</th>
                                <th>WEIGHT</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th><p>${values.kcal}</p></th>
                                <th><p>${values.car}</p></th>
                                <th><p>${values.pro}</p></th>
                                <th><p>${values.far}</p></th>
                                <th><input type="number"></th>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <button class="addToMeal">Add</button>
                </div>
            </div>
            `;
}

const addPanel = (values) => {
    return `<div class='container position-absolute top-0 start-0 bg-white'>
                <div class='row'> 
                    <p>Add to meal:</p>
                </div>
                <div class='row'>
                    <div class='col'>
                        <button class='btn btn-success' id='breakfast'>breakfast</button>
                    </div>
                    <div class='col'>
                        <button class='btn btn-success' id='lunch'>lunch</button>
                    </div>
                    <div class='col'>
                        <button class='btn btn-success' id='snack'>snack</button>
                    </div>
                    <div class='col'>
                        <button class='btn btn-success' id='dinner'>dinner</button>
                    </div>
                </div>
                <div class='row'>
                    <button class='btn btn-warning' id='closePanel'>close</button>
                </div>
            </div>`;
}

export { foodCard, addPanel };