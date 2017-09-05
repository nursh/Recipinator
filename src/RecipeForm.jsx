import React from 'react';


function RecipeForm() {
  return (
    <div className="ui container">
      <div className="ui grid centered">

        <div className="row">
          <div className="sixteen wide mobile eight wide computer column">
            <div className="ui very raised teal segment">

              <h2 className="ui teal horizontal divider header">
                Recipinator
              </h2>

              <form className="ui form">

                <div className="field">
                  <label htmlFor="title">Recipe Title</label>
                  <input type="text" name="title" id="title" placeholder="Recipe Title" />
                </div>

                <div className="field">
                  <label htmlFor="Description">Recipe Description</label>
                  <textarea
                    rows="3"
                    placeholder="Enter Recipe Description"
                    name="description"
                    id="description"
                  />
                </div>

                <div className="two fields">
                  <div className="field">
                    <label htmlFor="prep">Prep Time</label>
                    <input type="number" name="prep" id="prep" placeholder="Prep Time in mins" />
                  </div>

                  <div className="field">
                    <label htmlFor="cooking">Cooking Time</label>
                    <input
                      type="number"
                      name="cooking"
                      id="cooking"
                      placeholder="Cooking Time in mins"
                    />
                  </div>
                </div>

                <div className="field">
                  <input type="submit" className="ui teal button fluid" value="Create Recipe" />
                </div>
              </form>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default RecipeForm;
