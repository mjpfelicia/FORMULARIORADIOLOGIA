 {/* Data e Assinatura */}
          <div
            className="form-row"
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "Row",
              justifyContent: "Center",
              marginTop: 20,

            }}
          >
            {/* Campo Data */}
            <div
              className="form-group"
              style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
            >
              <label>Data:</label>
              <div style={{ display: "flex", alignItems: "center" }}>
                <input
                  type="text"
                  name="dia"
                  maxLength={2}
                  placeholder=""
                  value={formData.dia || ""}
                  onChange={handleChange}
                  style={{
                    width: 30,
                    border: "none",
                    padding: 0,
                    borderBottom: "2px solid black",
                    textAlign: "center",

                    outline: "none",
                  }}
                />
                {/* Barra vertical */}
                <span style={{ color: "#000" }}>|</span>

                <input
                  type="text"
                  name="mes"
                  maxLength={2}
                  placeholder=""
                  value={formData.mes || ""}
                  onChange={handleChange}
                  style={{
                    width: 30,
                    border: "none",
                    padding: 0,
                    borderBottom: "2px solid black",
                    textAlign: "center",
                    outline: "none",
                  }}
                />
                {/* Barra vertical */}
                <span style={{ color: "#000" }}>|</span>

                <input
                  type="text"
                  name="ano"
                  maxLength={4}
                  placeholder=""
                  value={formData.ano || ""}
                  onChange={handleChange}
                  style={{
                    width: 50,
                    border: "",
                    padding: 0,
                    borderBottom: "2px solid black",
                    textAlign: "center",
                    fontSize: 18,
                    outline: "none",
                  }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 12,
                  color: "#555",
                  width: 100,
                }}
              >

              </div>
            </div>

            {/* Campo Assinatura */}
            <div
              className="form-group"
              style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
            >
              <label>Assinatura:</label>
              <div
                style={{
                  borderBottom: "2px solid black",
                  width: 250,
                  height: 24,
                  marginTop: 4,
                }}
              ></div>
            </div>
          </div>