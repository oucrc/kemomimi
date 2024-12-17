-- 製品テーブル（product）作成
CREATE TABLE
    product (
        product_id TEXT PRIMARY KEY, -- 製品のユニークID
        name TEXT NOT NULL, -- 製品名
        model_number TEXT, -- 型番
        product_url TEXT, -- 商品URL
        remarks TEXT -- 備考
    );

-- 備品テーブル（public_item）作成
CREATE TABLE
    public_item (
        public_item_id TEXT PRIMARY KEY, -- 備品のユニークID
        name TEXT NOT NULL, -- 備品名
        product_id TEXT REFERENCES product (product_id), -- 製品のユニークID（Foreign Key）
        cost INT CHECK (cost >= 0), -- 購入コスト
        purchase_date DATE NOT NULL, -- 導入日
        expiration_date DATE CHECK (expiration_date > purchase_date), -- 耐用期限
        is_remaining BOOLEAN DEFAULT TRUE NOT NULL, -- 現存状態（廃棄済みなど）
        purchase_request_id TEXT, -- 購入申請ID（Foreign Key）
        remarks TEXT -- 備考
    );

-- 分類テーブル（category）作成
CREATE TABLE
    category (
        category_id TEXT PRIMARY KEY, -- カテゴリのユニークID
        name TEXT UNIQUE NOT NULL, -- カテゴリ名
        remarks TEXT -- 備考
    );

-- 製品-カテゴリ関係テーブル（product_category）作成
CREATE TABLE
    product_category (
        product_id TEXT REFERENCES product (product_id), -- 製品のID（productへのForeign Key）
        category_id TEXT REFERENCES category (category_id), -- カテゴリのID（categoryへのForeign Key）
        PRIMARY KEY (product_id, category_id) -- 複合主キー
    );
