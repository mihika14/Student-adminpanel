const swaggerOptions = {
    swaggerDefinition: {
      openapi: "3.0.1",
      info: {
        title: "User API",
        description: "Sample API for fetching, creating, editing, and deleting users data",
        version: "0.2",
      },
      paths: {
        "/users": {
          get: {
            summary: "Get a list of users",
            responses: {
              200: {
                description: "Successful response",
                content: {
                  "application/json; charset=utf-8": {
                    schema: {
                      type: "array",
                      items: {
                        $ref: "#/components/schemas/users",
                      },
                    },
                  },
                },
              },
            },
          },
        },
        "/createuser": {
          post: {
            summary: "Create a new student with all the details",
            requestBody: {
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/users", // Reference the user schema for request body
                  },
                },
              },
            },
            responses: {
              200: {
                description: "Student Data added",
              },
              400: {
                description: "Bad request",
              },
            },
          },
        },
        "/users/:id": {
          put: {
            summary: "Edit existing student's details by ID",
            requestBody: {
              content: {
                "application/json": {
                  schema: {
                    $ref: "#/components/schemas/users", // Reference the user schema for request body
                  },
                },
              },
            },
            responses: {
              200: {
                description: "Student Data edited",
              },
              500: {
                description: "Failed to update user",
              },
            },
          },
          delete: {
            summary: "Delete existing student's details by ID",
            responses: {
              200: {
                description: "Student Data deleted",
              },
              500: {
                description: "Failed to delete user",
              },
            },
          },
        },
      },
      components: {
        schemas: {
          users: {
            type: "object",
            properties: {
              id: {
                type: "integer",
                format: "int64",
                example: 1,
              },
              name: {
                type: "string",
                example: "user123",
              },
              rollno: {
                type: "integer",
                example: 12345,
              },
              section: {
                type: "string",
                example: "A",
              },
            },
          },
        },
      },
    },
    apis: ["./main.js"], // Include the path to your main.js file here
  };
  
  module.exports = swaggerOptions;
  