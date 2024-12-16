-- 製品テーブル（Product）作成
CREATE TABLE
    Product (
        product_id TEXT PRIMARY KEY, -- 製品のユニークID
        name TEXT NOT NULL, -- 製品名
        model_number TEXT, -- 型番
        product_url TEXT, -- 商品URL
        remarks TEXT -- 備考
    );

-- 備品テーブル（PublicItem）作成
CREATE TABLE
    PublicItem (
        public_item_id TEXT PRIMARY KEY, -- 備品のユニークID
        name TEXT NOT NULL, -- 備品名
        product_id TEXT, -- 製品のユニークID（Foreign Key）
        cost INT CHECK (cost >= 0), -- 購入コスト
        purchase_date DATE NOT NULL, -- 導入日
        expiration_date DATE CHECK (expiration_date > purchase_date), -- 耐用期限
        is_remaining BOOLEAN DEFAULT TRUE NOT NULL, -- 現存状態（廃棄済みなど）
        purchase_request_id TEXT, -- 購入申請ID（Foreign Key）
        remarks TEXT, -- 備考
        FOREIGN KEY (product_id) REFERENCES Product (product_id) -- 製品IDへの外部キー
    );

-- 分類テーブル（Category）作成
CREATE TABLE
    Category (
        category_id TEXT PRIMARY KEY, -- カテゴリのユニークID
        name TEXT UNIQUE NOT NULL, -- カテゴリ名
        remarks TEXT -- 備考
    );

-- 製品-カテゴリ関係テーブル（ProductCategory）作成
CREATE TABLE
    ProductCategory (
        product_id TEXT, -- 製品のID（ProductへのForeign Key）
        category_id TEXT, -- カテゴリのID（CategoryへのForeign Key）
        PRIMARY KEY (product_id, category_id), -- 複合主キー
        FOREIGN KEY (product_id) REFERENCES Product (product_id), -- 製品IDへの外部キー
        FOREIGN KEY (category_id) REFERENCES Category (category_id) -- カテゴリIDへの外部キー
    );