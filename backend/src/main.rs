use axum::{
    extract::{Path, Query, State},
    http::StatusCode,
    routing::{delete, get, patch, post},
    Json, Router,
};
use serde::{Deserialize, Serialize};
use sqlx::{PgPool, Postgres};
use std::sync::Arc;
use std::{collections::HashMap, env};

#[tokio::main]
async fn main() {
    dotenvy::dotenv().expect("Failed to read .env file");
    let database_url = env::var("DATABASE_URL").expect("DATABASE_URL must be set");
    // initialize tracing
    tracing_subscriber::fmt::init();

    // TODO postgresへの移行
    let pool = Arc::new(PgPool::connect(&database_url).await.unwrap());
    // build our application with a route
    let app = Router::new().with_state(pool.clone());

    // run our app with hyper, listening globally on port 3000
    let listener = tokio::net::TcpListener::bind("0.0.0.0:3000").await.unwrap();
    axum::serve(listener, app).await.unwrap();
}
