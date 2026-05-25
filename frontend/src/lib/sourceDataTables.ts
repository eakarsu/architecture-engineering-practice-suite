export type SourceDataColumn = {
  name: string;
  type: string;
  nullable: boolean;
  primaryKey: boolean;
  unique: boolean;
  defaultValue: string;
  sourceLine: string;
};

export type SourceDataTable = {
  id: string;
  sourceProject: string;
  name: string;
  displayName: string;
  framework: string;
  sourceFile: string;
  columns: SourceDataColumn[];
};

export const sourceDataTables: SourceDataTable[] = [
  {
    "id": "ai-architectural-design-generator-backend-src-routes-ai-extras-js-accessibility-audits",
    "sourceProject": "AIArchitecturalDesignGenerator",
    "name": "accessibility_audits",
    "displayName": "Accessibility Audits",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/aiExtras.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "design_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "design_id INTEGER"
      },
      {
        "name": "score",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "score INTEGER"
      },
      {
        "name": "ai_results",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_results JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-architectural-design-generator-backend-src-config-database-js-activity-log",
    "sourceProject": "AIArchitecturalDesignGenerator",
    "name": "activity_log",
    "displayName": "Activity Log",
    "framework": "SQL",
    "sourceFile": "backend/src/config/database.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "action",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "action VARCHAR(50) NOT NULL"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(100)"
      },
      {
        "name": "item_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "item_id INTEGER"
      },
      {
        "name": "item_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "item_name VARCHAR(255)"
      },
      {
        "name": "details",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "details TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-architectural-design-generator-backend-src-config-database-js-ai-results",
    "sourceProject": "AIArchitecturalDesignGenerator",
    "name": "ai_results",
    "displayName": "Ai Results",
    "framework": "SQL",
    "sourceFile": "backend/src/config/database.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(100) NOT NULL"
      },
      {
        "name": "item_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "item_id INTEGER"
      },
      {
        "name": "item_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "item_name VARCHAR(255)"
      },
      {
        "name": "result_data",
        "type": "JSONB",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result_data JSONB NOT NULL"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-architectural-design-generator-backend-src-routes-ai-extras-js-architecture-templates",
    "sourceProject": "AIArchitecturalDesignGenerator",
    "name": "architecture_templates",
    "displayName": "Architecture Templates",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/aiExtras.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "template_type",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "template_type VARCHAR(100) NOT NULL"
      },
      {
        "name": "dimensions",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dimensions JSONB"
      },
      {
        "name": "ai_results",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_results JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-architectural-design-generator-backend-src-routes-ai-extras-js-color-palettes",
    "sourceProject": "AIArchitecturalDesignGenerator",
    "name": "color_palettes",
    "displayName": "Color Palettes",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/aiExtras.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "room_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "room_type VARCHAR(100)"
      },
      {
        "name": "mood",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "mood VARCHAR(100)"
      },
      {
        "name": "ai_results",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_results JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-architectural-design-generator-backend-src-routes-ai-backlog-js-design-collab-locks",
    "sourceProject": "AIArchitecturalDesignGenerator",
    "name": "design_collab_locks",
    "displayName": "Design Collab Locks",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/aiBacklog.js",
    "columns": [
      {
        "name": "design_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "design_id INTEGER PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "locked_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "locked_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "expires_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expires_at TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-architectural-design-generator-backend-src-routes-ai-backlog-js-design-comments",
    "sourceProject": "AIArchitecturalDesignGenerator",
    "name": "design_comments",
    "displayName": "Design Comments",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/aiBacklog.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "design_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "design_id INTEGER NOT NULL"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "author_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "author_name VARCHAR(255)"
      },
      {
        "name": "body",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "body TEXT NOT NULL"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-architectural-design-generator-backend-src-routes-ai-extras-js-design-comments",
    "sourceProject": "AIArchitecturalDesignGenerator",
    "name": "design_comments",
    "displayName": "Design Comments",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/aiExtras.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "design_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "design_id INTEGER NOT NULL"
      },
      {
        "name": "author",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "author VARCHAR(255)"
      },
      {
        "name": "comment_text",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "comment_text TEXT NOT NULL"
      },
      {
        "name": "ai_grouping",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_grouping JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-architectural-design-generator-backend-src-routes-ai-backlog-js-design-versions",
    "sourceProject": "AIArchitecturalDesignGenerator",
    "name": "design_versions",
    "displayName": "Design Versions",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/aiBacklog.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "design_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "design_id INTEGER NOT NULL"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "label",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "label VARCHAR(255)"
      },
      {
        "name": "snapshot",
        "type": "JSONB",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "snapshot JSONB NOT NULL"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-architectural-design-generator-backend-src-config-database-js-favorites",
    "sourceProject": "AIArchitecturalDesignGenerator",
    "name": "favorites",
    "displayName": "Favorites",
    "framework": "SQL",
    "sourceFile": "backend/src/config/database.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(100) NOT NULL"
      },
      {
        "name": "item_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "item_id INTEGER NOT NULL"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-architectural-design-generator-backend-src-routes-ai-extras-js-furniture-arrangements",
    "sourceProject": "AIArchitecturalDesignGenerator",
    "name": "furniture_arrangements",
    "displayName": "Furniture Arrangements",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/aiExtras.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "room_dimensions",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "room_dimensions JSONB"
      },
      {
        "name": "ai_results",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_results JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-architectural-design-generator-backend-src-routes-gap-ai-design-bim-conversion-2d-js-gap-features",
    "sourceProject": "AIArchitecturalDesignGenerator",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap_ai_design_bim_conversion_2d.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-architectural-design-generator-backend-src-routes-gap-ai-energy-modeling-pipeline-js-gap-features",
    "sourceProject": "AIArchitecturalDesignGenerator",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap_ai_energy_modeling_pipeline.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-architectural-design-generator-backend-src-routes-gap-ai-precedent-project-search-similar-js-gap-features",
    "sourceProject": "AIArchitecturalDesignGenerator",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap_ai_precedent_project_search_similar.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-architectural-design-generator-backend-src-routes-gap-ai-structural-feasibility-checker-js-gap-features",
    "sourceProject": "AIArchitecturalDesignGenerator",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap_ai_structural_feasibility_checker.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-architectural-design-generator-backend-src-routes-gap-design-version-control-branching-js-gap-features",
    "sourceProject": "AIArchitecturalDesignGenerator",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap_design_version_control_branching.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-architectural-design-generator-backend-src-routes-gap-multi-user-collaborative-design-editing-js-gap-features",
    "sourceProject": "AIArchitecturalDesignGenerator",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap_multi_user_collaborative_design_editing.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-architectural-design-generator-backend-src-routes-gap-native-rendering-visualization-pipeline-js-gap-features",
    "sourceProject": "AIArchitecturalDesignGenerator",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap_native_rendering_visualization_pipeline.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-architectural-design-generator-backend-src-routes-gap-outbound-webhooks-js-gap-features",
    "sourceProject": "AIArchitecturalDesignGenerator",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap_outbound_webhooks.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-architectural-design-generator-backend-src-routes-gap-structural-analysis-hooks-js-gap-features",
    "sourceProject": "AIArchitecturalDesignGenerator",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap_structural_analysis_hooks.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "project",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "project TEXT"
      },
      {
        "name": "slug",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug TEXT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-architectural-design-generator-backend-src-routes-ai-extras-js-lighting-simulations",
    "sourceProject": "AIArchitecturalDesignGenerator",
    "name": "lighting_simulations",
    "displayName": "Lighting Simulations",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/aiExtras.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "ai_results",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "ai_results JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-architectural-design-generator-backend-src-routes-ai-backlog-js-material-library-items",
    "sourceProject": "AIArchitecturalDesignGenerator",
    "name": "material_library_items",
    "displayName": "Material Library Items",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/aiBacklog.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(120)"
      },
      {
        "name": "data",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'{}'::jsonb",
        "sourceLine": "data JSONB DEFAULT '{}'::jsonb"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-architectural-design-generator-backend-src-config-database-js-notes",
    "sourceProject": "AIArchitecturalDesignGenerator",
    "name": "notes",
    "displayName": "Notes",
    "framework": "SQL",
    "sourceFile": "backend/src/config/database.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "feature_key",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "feature_key VARCHAR(100) NOT NULL"
      },
      {
        "name": "item_id",
        "type": "INTEGER",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "item_id INTEGER NOT NULL"
      },
      {
        "name": "content",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "content TEXT NOT NULL"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-architectural-design-generator-backend-src-seed-js-users",
    "sourceProject": "AIArchitecturalDesignGenerator",
    "name": "users",
    "displayName": "Users",
    "framework": "SQL",
    "sourceFile": "backend/src/seed.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255) UNIQUE NOT NULL"
      },
      {
        "name": "password",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password VARCHAR(255) NOT NULL"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-architectural-design-generator-backend-src-config-database-js-users",
    "sourceProject": "AIArchitecturalDesignGenerator",
    "name": "users",
    "displayName": "Users",
    "framework": "SQL",
    "sourceFile": "backend/src/config/database.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255) UNIQUE NOT NULL"
      },
      {
        "name": "password",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password VARCHAR(255) NOT NULL"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-factory-floor-safety-monitor-backend-src-routes-integrations-js-auto-stop-advisories",
    "sourceProject": "AIFactoryFloorSafetyMonitor",
    "name": "auto_stop_advisories",
    "displayName": "Auto Stop Advisories",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/integrations.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "equipment_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "equipment_id VARCHAR(120)"
      },
      {
        "name": "zone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "zone VARCHAR(120)"
      },
      {
        "name": "severity",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "severity VARCHAR(20)"
      },
      {
        "name": "reason",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reason TEXT"
      },
      {
        "name": "recommendation",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recommendation TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-factory-floor-safety-monitor-backend-routes-batch03-gaps-js-gap-features",
    "sourceProject": "AIFactoryFloorSafetyMonitor",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/batch03Gaps.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "user_id",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-factory-floor-safety-monitor-backend-src-routes-integrations-js-inspection-checklists",
    "sourceProject": "AIFactoryFloorSafetyMonitor",
    "name": "inspection_checklists",
    "displayName": "Inspection Checklists",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/integrations.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "area",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "area VARCHAR(120) NOT NULL"
      },
      {
        "name": "frequency",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'weekly'",
        "sourceLine": "frequency VARCHAR(20) DEFAULT 'weekly'"
      },
      {
        "name": "items",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "items TEXT"
      },
      {
        "name": "reviewer",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reviewer VARCHAR(160)"
      },
      {
        "name": "last_run",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "last_run TIMESTAMP"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-factory-floor-safety-monitor-backend-src-routes-integrations-js-inspection-results",
    "sourceProject": "AIFactoryFloorSafetyMonitor",
    "name": "inspection_results",
    "displayName": "Inspection Results",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/integrations.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "checklist_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "checklist_id INTEGER"
      },
      {
        "name": "passed_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "passed_count INTEGER"
      },
      {
        "name": "failed_count",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "failed_count INTEGER"
      },
      {
        "name": "findings",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "findings TEXT"
      },
      {
        "name": "reviewer",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "reviewer VARCHAR(160)"
      },
      {
        "name": "ran_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "ran_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-factory-floor-safety-monitor-backend-src-routes-integrations-js-wearable-devices",
    "sourceProject": "AIFactoryFloorSafetyMonitor",
    "name": "wearable_devices",
    "displayName": "Wearable Devices",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/integrations.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "employee_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "employee_id VARCHAR(120)"
      },
      {
        "name": "provider",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "provider VARCHAR(40)"
      },
      {
        "name": "device_id",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "device_id VARCHAR(120)"
      },
      {
        "name": "enrolled_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "enrolled_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-floor-plan-analyzer-backend-db-js-ai-analysis",
    "sourceProject": "AIFloorPlanAnalyzer",
    "name": "ai_analysis",
    "displayName": "Ai Analysis",
    "framework": "SQL",
    "sourceFile": "backend/db.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "floor_plan_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "floor_plan_id INTEGER REFERENCES floor_plans(id) ON DELETE CASCADE"
      },
      {
        "name": "analysis_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "analysis_type VARCHAR(100)"
      },
      {
        "name": "prompt",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "prompt TEXT"
      },
      {
        "name": "result",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result JSONB"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(100)"
      },
      {
        "name": "tokens_used",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens_used INTEGER"
      },
      {
        "name": "processing_time_ms",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "processing_time_ms INTEGER"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-floor-plan-analyzer-backend-db-js-ai-materials",
    "sourceProject": "AIFloorPlanAnalyzer",
    "name": "ai_materials",
    "displayName": "Ai Materials",
    "framework": "SQL",
    "sourceFile": "backend/db.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "floor_plan_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "floor_plan_id INTEGER REFERENCES floor_plans(id) ON DELETE CASCADE"
      },
      {
        "name": "full_result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "full_result TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(100)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-floor-plan-analyzer-backend-db-js-ai-suggestions",
    "sourceProject": "AIFloorPlanAnalyzer",
    "name": "ai_suggestions",
    "displayName": "Ai Suggestions",
    "framework": "SQL",
    "sourceFile": "backend/db.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "floor_plan_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "floor_plan_id INTEGER REFERENCES floor_plans(id) ON DELETE CASCADE"
      },
      {
        "name": "full_result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "full_result TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(100)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-floor-plan-analyzer-backend-db-js-contractors",
    "sourceProject": "AIFloorPlanAnalyzer",
    "name": "contractors",
    "displayName": "Contractors",
    "framework": "SQL",
    "sourceFile": "backend/db.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "company",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "company VARCHAR(255)"
      },
      {
        "name": "specialty",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "specialty VARCHAR(100)"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255)"
      },
      {
        "name": "phone",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone VARCHAR(50)"
      },
      {
        "name": "rating",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rating DECIMAL(3,2)"
      },
      {
        "name": "hourly_rate",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hourly_rate DECIMAL(10,2)"
      },
      {
        "name": "availability",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "availability VARCHAR(100)"
      },
      {
        "name": "location",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location VARCHAR(255)"
      },
      {
        "name": "verified",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "verified BOOLEAN DEFAULT false"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-floor-plan-analyzer-backend-db-js-design-templates",
    "sourceProject": "AIFloorPlanAnalyzer",
    "name": "design_templates",
    "displayName": "Design Templates",
    "framework": "SQL",
    "sourceFile": "backend/db.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "style",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "style VARCHAR(100)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "room_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "room_type VARCHAR(100)"
      },
      {
        "name": "features",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "features JSONB"
      },
      {
        "name": "color_palette",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "color_palette JSONB"
      },
      {
        "name": "image_url",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "image_url TEXT"
      },
      {
        "name": "popularity",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "popularity INTEGER DEFAULT 0"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-floor-plan-analyzer-backend-db-js-energy-audits",
    "sourceProject": "AIFloorPlanAnalyzer",
    "name": "energy_audits",
    "displayName": "Energy Audits",
    "framework": "SQL",
    "sourceFile": "backend/db.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "floor_plan_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "floor_plan_id INTEGER REFERENCES floor_plans(id) ON DELETE CASCADE"
      },
      {
        "name": "efficiency_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "efficiency_score DECIMAL(5,2)"
      },
      {
        "name": "annual_cost_estimate",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "annual_cost_estimate DECIMAL(12,2)"
      },
      {
        "name": "potential_savings",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "potential_savings DECIMAL(12,2)"
      },
      {
        "name": "recommendations",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recommendations JSONB"
      },
      {
        "name": "carbon_footprint",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "carbon_footprint DECIMAL(10,2)"
      },
      {
        "name": "full_result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "full_result TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(100)"
      },
      {
        "name": "ai_generated",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "ai_generated BOOLEAN DEFAULT true"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-floor-plan-analyzer-backend-db-js-floor-plans",
    "sourceProject": "AIFloorPlanAnalyzer",
    "name": "floor_plans",
    "displayName": "Floor Plans",
    "framework": "SQL",
    "sourceFile": "backend/db.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id)"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "image_url",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "image_url TEXT"
      },
      {
        "name": "image_data",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "image_data TEXT"
      },
      {
        "name": "total_area",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total_area DECIMAL(10,2)"
      },
      {
        "name": "unit",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'sqft'",
        "sourceLine": "unit VARCHAR(20) DEFAULT 'sqft'"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'pending'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-floor-plan-analyzer-backend-db-js-full-analyses",
    "sourceProject": "AIFloorPlanAnalyzer",
    "name": "full_analyses",
    "displayName": "Full Analyses",
    "framework": "SQL",
    "sourceFile": "backend/db.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "floor_plan_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "floor_plan_id INTEGER REFERENCES floor_plans(id) ON DELETE CASCADE"
      },
      {
        "name": "room_identification",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "room_identification TEXT"
      },
      {
        "name": "layout_analysis",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "layout_analysis TEXT"
      },
      {
        "name": "space_utilization",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "space_utilization TEXT"
      },
      {
        "name": "natural_light",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "natural_light TEXT"
      },
      {
        "name": "renovation_potential",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "renovation_potential TEXT"
      },
      {
        "name": "full_result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "full_result TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(100)"
      },
      {
        "name": "ai_generated",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "ai_generated BOOLEAN DEFAULT true"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-floor-plan-analyzer-backend-db-js-furniture-placements",
    "sourceProject": "AIFloorPlanAnalyzer",
    "name": "furniture_placements",
    "displayName": "Furniture Placements",
    "framework": "SQL",
    "sourceFile": "backend/db.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "floor_plan_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "floor_plan_id INTEGER REFERENCES floor_plans(id) ON DELETE CASCADE"
      },
      {
        "name": "room_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "room_id INTEGER REFERENCES rooms(id) ON DELETE CASCADE"
      },
      {
        "name": "furniture_items",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "furniture_items JSONB"
      },
      {
        "name": "layout_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "layout_score DECIMAL(5,2)"
      },
      {
        "name": "traffic_flow_rating",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "traffic_flow_rating VARCHAR(50)"
      },
      {
        "name": "full_result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "full_result TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(100)"
      },
      {
        "name": "ai_generated",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "ai_generated BOOLEAN DEFAULT true"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-floor-plan-analyzer-backend-routes-batch03-gaps-js-gap-features",
    "sourceProject": "AIFloorPlanAnalyzer",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/batch03Gaps.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(120) NOT NULL"
      },
      {
        "name": "user_id",
        "type": "INT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INT"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMPTZ",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMPTZ DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-floor-plan-analyzer-backend-db-js-home-inspections",
    "sourceProject": "AIFloorPlanAnalyzer",
    "name": "home_inspections",
    "displayName": "Home Inspections",
    "framework": "SQL",
    "sourceFile": "backend/db.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "floor_plan_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "floor_plan_id INTEGER REFERENCES floor_plans(id) ON DELETE CASCADE"
      },
      {
        "name": "inspection_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "inspection_type VARCHAR(100)"
      },
      {
        "name": "overall_condition",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "overall_condition VARCHAR(50)"
      },
      {
        "name": "issues_found",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "issues_found JSONB"
      },
      {
        "name": "critical_issues",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "critical_issues INTEGER"
      },
      {
        "name": "estimated_repair_cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimated_repair_cost DECIMAL(12,2)"
      },
      {
        "name": "full_result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "full_result TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(100)"
      },
      {
        "name": "ai_generated",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "ai_generated BOOLEAN DEFAULT true"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-floor-plan-analyzer-backend-db-js-home-staging",
    "sourceProject": "AIFloorPlanAnalyzer",
    "name": "home_staging",
    "displayName": "Home Staging",
    "framework": "SQL",
    "sourceFile": "backend/db.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "floor_plan_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "floor_plan_id INTEGER REFERENCES floor_plans(id) ON DELETE CASCADE"
      },
      {
        "name": "room_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "room_id INTEGER REFERENCES rooms(id) ON DELETE CASCADE"
      },
      {
        "name": "staging_style",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "staging_style VARCHAR(100)"
      },
      {
        "name": "recommendations",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recommendations JSONB"
      },
      {
        "name": "target_buyer",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "target_buyer VARCHAR(100)"
      },
      {
        "name": "estimated_value_increase",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimated_value_increase DECIMAL(12,2)"
      },
      {
        "name": "full_result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "full_result TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(100)"
      },
      {
        "name": "ai_generated",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "ai_generated BOOLEAN DEFAULT true"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-floor-plan-analyzer-backend-db-js-layout-optimizations",
    "sourceProject": "AIFloorPlanAnalyzer",
    "name": "layout_optimizations",
    "displayName": "Layout Optimizations",
    "framework": "SQL",
    "sourceFile": "backend/db.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "floor_plan_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "floor_plan_id INTEGER REFERENCES floor_plans(id) ON DELETE CASCADE"
      },
      {
        "name": "traffic_flow",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "traffic_flow TEXT"
      },
      {
        "name": "efficiency_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "efficiency_score DECIMAL(3,1)"
      },
      {
        "name": "natural_light",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "natural_light TEXT"
      },
      {
        "name": "privacy_analysis",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "privacy_analysis TEXT"
      },
      {
        "name": "noise_zones",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "noise_zones TEXT"
      },
      {
        "name": "furniture_suggestions",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "furniture_suggestions TEXT"
      },
      {
        "name": "layout_modifications",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "layout_modifications TEXT"
      },
      {
        "name": "full_result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "full_result TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(100)"
      },
      {
        "name": "ai_generated",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "ai_generated BOOLEAN DEFAULT true"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-floor-plan-analyzer-backend-db-js-maintenance-predictions",
    "sourceProject": "AIFloorPlanAnalyzer",
    "name": "maintenance_predictions",
    "displayName": "Maintenance Predictions",
    "framework": "SQL",
    "sourceFile": "backend/db.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "floor_plan_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "floor_plan_id INTEGER REFERENCES floor_plans(id) ON DELETE CASCADE"
      },
      {
        "name": "predictions",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "predictions JSONB"
      },
      {
        "name": "total_annual_cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total_annual_cost DECIMAL(12,2)"
      },
      {
        "name": "priority_items",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "priority_items INTEGER"
      },
      {
        "name": "next_maintenance_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "next_maintenance_date DATE"
      },
      {
        "name": "full_result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "full_result TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(100)"
      },
      {
        "name": "ai_generated",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "ai_generated BOOLEAN DEFAULT true"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-floor-plan-analyzer-backend-db-js-materials",
    "sourceProject": "AIFloorPlanAnalyzer",
    "name": "materials",
    "displayName": "Materials",
    "framework": "SQL",
    "sourceFile": "backend/db.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL UNIQUE"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(100)"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "unit_price",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unit_price DECIMAL(10,2)"
      },
      {
        "name": "unit",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unit VARCHAR(50)"
      },
      {
        "name": "supplier",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "supplier VARCHAR(255)"
      },
      {
        "name": "in_stock",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "in_stock BOOLEAN DEFAULT true"
      },
      {
        "name": "image_url",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "image_url TEXT"
      },
      {
        "name": "ai_generated",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "ai_generated BOOLEAN DEFAULT false"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-floor-plan-analyzer-backend-db-js-password-reset-tokens",
    "sourceProject": "AIFloorPlanAnalyzer",
    "name": "password_reset_tokens",
    "displayName": "Password Reset Tokens",
    "framework": "SQL",
    "sourceFile": "backend/db.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id INTEGER REFERENCES users(id) ON DELETE CASCADE"
      },
      {
        "name": "token",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "token VARCHAR(255) NOT NULL"
      },
      {
        "name": "expires_at",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expires_at TIMESTAMP NOT NULL"
      },
      {
        "name": "used",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "used BOOLEAN DEFAULT false"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-floor-plan-analyzer-backend-db-js-project-estimates",
    "sourceProject": "AIFloorPlanAnalyzer",
    "name": "project_estimates",
    "displayName": "Project Estimates",
    "framework": "SQL",
    "sourceFile": "backend/db.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "floor_plan_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "floor_plan_id INTEGER REFERENCES floor_plans(id) ON DELETE CASCADE"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "labor_cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "labor_cost DECIMAL(12,2)"
      },
      {
        "name": "material_cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "material_cost DECIMAL(12,2)"
      },
      {
        "name": "total_cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total_cost DECIMAL(12,2)"
      },
      {
        "name": "timeline_days",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "timeline_days INTEGER"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'draft'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'draft'"
      },
      {
        "name": "ai_generated",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "ai_generated BOOLEAN DEFAULT false"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-floor-plan-analyzer-backend-db-js-renovation-suggestions",
    "sourceProject": "AIFloorPlanAnalyzer",
    "name": "renovation_suggestions",
    "displayName": "Renovation Suggestions",
    "framework": "SQL",
    "sourceFile": "backend/db.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "floor_plan_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "floor_plan_id INTEGER REFERENCES floor_plans(id) ON DELETE CASCADE"
      },
      {
        "name": "room_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "room_id INTEGER REFERENCES rooms(id) ON DELETE CASCADE"
      },
      {
        "name": "title",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title VARCHAR(255) NOT NULL"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "category",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category VARCHAR(100)"
      },
      {
        "name": "priority",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "priority VARCHAR(50)"
      },
      {
        "name": "estimated_cost",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimated_cost DECIMAL(12,2)"
      },
      {
        "name": "cost_range_min",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "cost_range_min DECIMAL(12,2)"
      },
      {
        "name": "cost_range_max",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "cost_range_max DECIMAL(12,2)"
      },
      {
        "name": "difficulty",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "difficulty VARCHAR(50)"
      },
      {
        "name": "timeline",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "timeline VARCHAR(100)"
      },
      {
        "name": "status",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status VARCHAR(50) DEFAULT 'pending'"
      },
      {
        "name": "ai_generated",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "ai_generated BOOLEAN DEFAULT false"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-floor-plan-analyzer-backend-db-js-room-detections",
    "sourceProject": "AIFloorPlanAnalyzer",
    "name": "room_detections",
    "displayName": "Room Detections",
    "framework": "SQL",
    "sourceFile": "backend/db.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "floor_plan_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "floor_plan_id INTEGER REFERENCES floor_plans(id) ON DELETE CASCADE"
      },
      {
        "name": "detected_rooms",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "detected_rooms JSONB"
      },
      {
        "name": "total_rooms",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "total_rooms INTEGER"
      },
      {
        "name": "confidence_score",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "confidence_score DECIMAL(5,2)"
      },
      {
        "name": "full_result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "full_result TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(100)"
      },
      {
        "name": "ai_generated",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "ai_generated BOOLEAN DEFAULT true"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-floor-plan-analyzer-backend-db-js-room-dimensions",
    "sourceProject": "AIFloorPlanAnalyzer",
    "name": "room_dimensions",
    "displayName": "Room Dimensions",
    "framework": "SQL",
    "sourceFile": "backend/db.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "floor_plan_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "floor_plan_id INTEGER REFERENCES floor_plans(id) ON DELETE CASCADE"
      },
      {
        "name": "room_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "room_id INTEGER REFERENCES rooms(id) ON DELETE CASCADE"
      },
      {
        "name": "room_name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "room_name VARCHAR(255)"
      },
      {
        "name": "room_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "room_type VARCHAR(100)"
      },
      {
        "name": "width",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "width DECIMAL(10,2)"
      },
      {
        "name": "length",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "length DECIMAL(10,2)"
      },
      {
        "name": "area",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "area DECIMAL(10,2)"
      },
      {
        "name": "features",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "features TEXT"
      },
      {
        "name": "full_result",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "full_result TEXT"
      },
      {
        "name": "model_used",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model_used VARCHAR(100)"
      },
      {
        "name": "ai_generated",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "ai_generated BOOLEAN DEFAULT true"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-floor-plan-analyzer-backend-db-js-rooms",
    "sourceProject": "AIFloorPlanAnalyzer",
    "name": "rooms",
    "displayName": "Rooms",
    "framework": "SQL",
    "sourceFile": "backend/db.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "floor_plan_id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "floor_plan_id INTEGER REFERENCES floor_plans(id) ON DELETE CASCADE"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255) NOT NULL"
      },
      {
        "name": "room_type",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "room_type VARCHAR(100)"
      },
      {
        "name": "width",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "width DECIMAL(10,2)"
      },
      {
        "name": "length",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "length DECIMAL(10,2)"
      },
      {
        "name": "height",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "9",
        "sourceLine": "height DECIMAL(10,2) DEFAULT 9"
      },
      {
        "name": "area",
        "type": "DECIMAL",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "area DECIMAL(10,2)"
      },
      {
        "name": "unit",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'ft'",
        "sourceLine": "unit VARCHAR(20) DEFAULT 'ft'"
      },
      {
        "name": "position_x",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "position_x INTEGER"
      },
      {
        "name": "position_y",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "position_y INTEGER"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-floor-plan-analyzer-backend-db-js-token-blacklist",
    "sourceProject": "AIFloorPlanAnalyzer",
    "name": "token_blacklist",
    "displayName": "Token Blacklist",
    "framework": "SQL",
    "sourceFile": "backend/db.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "token",
        "type": "TEXT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "token TEXT NOT NULL"
      },
      {
        "name": "expires_at",
        "type": "TIMESTAMP",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expires_at TIMESTAMP NOT NULL"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-floor-plan-analyzer-backend-db-js-users",
    "sourceProject": "AIFloorPlanAnalyzer",
    "name": "users",
    "displayName": "Users",
    "framework": "SQL",
    "sourceFile": "backend/db.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "email",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email VARCHAR(255) UNIQUE NOT NULL"
      },
      {
        "name": "password",
        "type": "VARCHAR",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password VARCHAR(255) NOT NULL"
      },
      {
        "name": "name",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name VARCHAR(255)"
      },
      {
        "name": "role",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'user'",
        "sourceLine": "role VARCHAR(50) DEFAULT 'user'"
      },
      {
        "name": "email_verified",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "email_verified BOOLEAN DEFAULT false"
      },
      {
        "name": "email_verification_token",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "email_verification_token VARCHAR(255)"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-interior-design-backend-prisma-schema-prisma-ai-generation",
    "sourceProject": "AiInteriorDesign",
    "name": "AIGeneration",
    "displayName": "AI Generation",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id          String   @id @default(uuid())"
      },
      {
        "name": "userId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId      String"
      },
      {
        "name": "type",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type        String"
      },
      {
        "name": "prompt",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "prompt      String"
      },
      {
        "name": "result",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "result      String?"
      },
      {
        "name": "imageUrl",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "imageUrl    String?"
      },
      {
        "name": "status",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"pending\"",
        "sourceLine": "status      String   @default(\"pending\")"
      },
      {
        "name": "model",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "model       String?"
      },
      {
        "name": "tokens",
        "type": "Int?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tokens      Int?"
      },
      {
        "name": "cost",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "cost        Float?"
      },
      {
        "name": "user",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user User @relation(fields: [userId], references: [id], onDelete: Cascade)"
      }
    ]
  },
  {
    "id": "ai-interior-design-backend-prisma-schema-prisma-ar-session",
    "sourceProject": "AiInteriorDesign",
    "name": "ARSession",
    "displayName": "AR Session",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id          String   @id @default(uuid())"
      },
      {
        "name": "userId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId      String"
      },
      {
        "name": "roomId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "roomId      String?"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name        String"
      },
      {
        "name": "status",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"active\"",
        "sourceLine": "status      String   @default(\"active\")"
      },
      {
        "name": "sceneData",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sceneData   String?"
      },
      {
        "name": "thumbnail",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "thumbnail   String?"
      },
      {
        "name": "user",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user User  @relation(fields: [userId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "room",
        "type": "Room?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "room Room? @relation(fields: [roomId], references: [id], onDelete: Cascade)"
      }
    ]
  },
  {
    "id": "ai-interior-design-backend-prisma-schema-prisma-color-palette",
    "sourceProject": "AiInteriorDesign",
    "name": "ColorPalette",
    "displayName": "Color Palette",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id          String   @id @default(uuid())"
      },
      {
        "name": "designId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "designId    String?"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name        String"
      },
      {
        "name": "colors",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "colors      String"
      },
      {
        "name": "style",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "style       String?"
      },
      {
        "name": "mood",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "mood        String?"
      },
      {
        "name": "aiGenerated",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "aiGenerated Boolean  @default(false)"
      },
      {
        "name": "design",
        "type": "Design?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "design Design? @relation(fields: [designId], references: [id], onDelete: Cascade)"
      }
    ]
  },
  {
    "id": "ai-interior-design-backend-prisma-schema-prisma-design",
    "sourceProject": "AiInteriorDesign",
    "name": "Design",
    "displayName": "Design",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id          String   @id @default(uuid())"
      },
      {
        "name": "userId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId      String"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name        String"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description String?"
      },
      {
        "name": "thumbnail",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "thumbnail   String?"
      },
      {
        "name": "status",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"draft\"",
        "sourceLine": "status      String   @default(\"draft\")"
      },
      {
        "name": "style",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "style       String?"
      },
      {
        "name": "roomType",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "roomType    String?"
      },
      {
        "name": "budget",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "budget      Float?"
      },
      {
        "name": "user",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user      User       @relation(fields: [userId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "rooms",
        "type": "Room[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rooms     Room[]"
      },
      {
        "name": "furniture",
        "type": "Furniture[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "furniture Furniture[]"
      },
      {
        "name": "palettes",
        "type": "ColorPalette[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "palettes  ColorPalette[]"
      }
    ]
  },
  {
    "id": "ai-interior-design-backend-src-routes-marketplace-js-designer-profile",
    "sourceProject": "AiInteriorDesign",
    "name": "DesignerProfile",
    "displayName": "\"Designer Profile\"",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/marketplace.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "user_id",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id TEXT"
      },
      {
        "name": "display_name",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "display_name TEXT"
      },
      {
        "name": "bio",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bio TEXT"
      },
      {
        "name": "styles",
        "type": "TEXT[]",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "styles TEXT[]"
      },
      {
        "name": "regions",
        "type": "TEXT[]",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "regions TEXT[]"
      },
      {
        "name": "hourly_rate",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hourly_rate NUMERIC"
      },
      {
        "name": "years_experience",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "years_experience INTEGER"
      },
      {
        "name": "portfolio_url",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "portfolio_url TEXT"
      },
      {
        "name": "verified",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "verified BOOLEAN DEFAULT false"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      },
      {
        "name": "updated_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "updated_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-interior-design-backend-prisma-schema-prisma-furniture",
    "sourceProject": "AiInteriorDesign",
    "name": "Furniture",
    "displayName": "Furniture",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id          String   @id @default(uuid())"
      },
      {
        "name": "designId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "designId    String?"
      },
      {
        "name": "roomId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "roomId      String?"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name        String"
      },
      {
        "name": "category",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category    String"
      },
      {
        "name": "style",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "style       String?"
      },
      {
        "name": "color",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "color       String?"
      },
      {
        "name": "material",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "material    String?"
      },
      {
        "name": "price",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "price       Float?"
      },
      {
        "name": "dimensions",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dimensions  String?"
      },
      {
        "name": "imageUrl",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "imageUrl    String?"
      },
      {
        "name": "modelUrl",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "modelUrl    String?"
      },
      {
        "name": "aiGenerated",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "aiGenerated Boolean  @default(false)"
      },
      {
        "name": "storeUrl",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "storeUrl    String?"
      },
      {
        "name": "storeName",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "storeName   String?"
      },
      {
        "name": "sku",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sku         String?"
      },
      {
        "name": "inStock",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "true",
        "sourceLine": "inStock     Boolean  @default(true)"
      },
      {
        "name": "design",
        "type": "Design?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "design            Design?            @relation(fields: [designId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "room",
        "type": "Room?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "room              Room?              @relation(fields: [roomId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "shoppingListItems",
        "type": "ShoppingListItem[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "shoppingListItems ShoppingListItem[]"
      }
    ]
  },
  {
    "id": "ai-interior-design-backend-routes-gap-live-vendorcontractor-integrations-still-js-gap-features",
    "sourceProject": "AiInteriorDesign",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap-live-vendorcontractor-integrations-still.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(120)"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-interior-design-backend-routes-gap-no-3d-model-library-expansion-beyond-js-gap-features",
    "sourceProject": "AiInteriorDesign",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap-no-3d-model-library-expansion-beyond.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(120)"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-interior-design-backend-routes-gap-no-accessibility-recommender-js-gap-features",
    "sourceProject": "AiInteriorDesign",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap-no-accessibility-recommender.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(120)"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-interior-design-backend-routes-gap-no-file-upload-pipeline-for-floor-js-gap-features",
    "sourceProject": "AiInteriorDesign",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap-no-file-upload-pipeline-for-floor.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(120)"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-interior-design-backend-routes-gap-no-native-ar-mobile-app-only-js-gap-features",
    "sourceProject": "AiInteriorDesign",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap-no-native-ar-mobile-app-only.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(120)"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-interior-design-backend-routes-gap-no-notifications-module-0-references-js-gap-features",
    "sourceProject": "AiInteriorDesign",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap-no-notifications-module-0-references.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(120)"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-interior-design-backend-routes-gap-no-room-layout-optimizer-js-gap-features",
    "sourceProject": "AiInteriorDesign",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap-no-room-layout-optimizer.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(120)"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-interior-design-backend-routes-gap-no-sustainability-scoring-ai-js-gap-features",
    "sourceProject": "AiInteriorDesign",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap-no-sustainability-scoring-ai.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(120)"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-interior-design-backend-routes-gap-no-trend-forecaster-endpoint-js-gap-features",
    "sourceProject": "AiInteriorDesign",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap-no-trend-forecaster-endpoint.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(120)"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-interior-design-backend-routes-gap-no-webhook-surface-js-gap-features",
    "sourceProject": "AiInteriorDesign",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/routes/gap-no-webhook-surface.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(120)"
      },
      {
        "name": "input",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input JSONB"
      },
      {
        "name": "output",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-interior-design-backend-prisma-schema-prisma-inspiration",
    "sourceProject": "AiInteriorDesign",
    "name": "Inspiration",
    "displayName": "Inspiration",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id          String   @id @default(uuid())"
      },
      {
        "name": "title",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title       String"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description String?"
      },
      {
        "name": "imageUrl",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "imageUrl    String"
      },
      {
        "name": "style",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "style       String?"
      },
      {
        "name": "roomType",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "roomType    String?"
      },
      {
        "name": "tags",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tags        String?"
      },
      {
        "name": "likes",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "likes       Int      @default(0)"
      }
    ]
  },
  {
    "id": "ai-interior-design-backend-prisma-schema-prisma-material",
    "sourceProject": "AiInteriorDesign",
    "name": "Material",
    "displayName": "Material",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id          String   @id @default(uuid())"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name        String"
      },
      {
        "name": "category",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category    String"
      },
      {
        "name": "texture",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "texture     String?"
      },
      {
        "name": "color",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "color       String?"
      },
      {
        "name": "price",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "price       Float?"
      },
      {
        "name": "imageUrl",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "imageUrl    String?"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description String?"
      }
    ]
  },
  {
    "id": "ai-interior-design-backend-prisma-schema-prisma-password-reset-token",
    "sourceProject": "AiInteriorDesign",
    "name": "PasswordResetToken",
    "displayName": "Password Reset Token",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id        String   @id @default(uuid())"
      },
      {
        "name": "token",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "token     String   @unique"
      },
      {
        "name": "userId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId    String"
      },
      {
        "name": "expiresAt",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "expiresAt DateTime"
      },
      {
        "name": "used",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "used      Boolean  @default(false)"
      },
      {
        "name": "user",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user User @relation(fields: [userId], references: [id], onDelete: Cascade)"
      }
    ]
  },
  {
    "id": "ai-interior-design-backend-src-routes-project-management-js-project-budget-line",
    "sourceProject": "AiInteriorDesign",
    "name": "ProjectBudgetLine",
    "displayName": "\"Project Budget Line\"",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/projectManagement.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "design_id",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "design_id TEXT"
      },
      {
        "name": "user_id",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id TEXT"
      },
      {
        "name": "category",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category TEXT"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description TEXT"
      },
      {
        "name": "budget_amount",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "budget_amount NUMERIC"
      },
      {
        "name": "actual_amount",
        "type": "NUMERIC",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "actual_amount NUMERIC"
      },
      {
        "name": "currency",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'USD'",
        "sourceLine": "currency TEXT DEFAULT 'USD'"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-interior-design-backend-src-routes-project-management-js-project-milestone",
    "sourceProject": "AiInteriorDesign",
    "name": "ProjectMilestone",
    "displayName": "\"Project Milestone\"",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/projectManagement.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "design_id",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "design_id TEXT"
      },
      {
        "name": "user_id",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user_id TEXT"
      },
      {
        "name": "title",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title TEXT"
      },
      {
        "name": "target_date",
        "type": "DATE",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "target_date DATE"
      },
      {
        "name": "status",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status TEXT DEFAULT 'pending'"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes TEXT"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "NOW()",
        "sourceLine": "created_at TIMESTAMP DEFAULT NOW()"
      }
    ]
  },
  {
    "id": "ai-interior-design-backend-prisma-schema-prisma-room",
    "sourceProject": "AiInteriorDesign",
    "name": "Room",
    "displayName": "Room",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id        String   @id @default(uuid())"
      },
      {
        "name": "designId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "designId  String"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name      String"
      },
      {
        "name": "type",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type      String"
      },
      {
        "name": "width",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "width     Float?"
      },
      {
        "name": "height",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "height    Float?"
      },
      {
        "name": "length",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "length    Float?"
      },
      {
        "name": "thumbnail",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "thumbnail String?"
      },
      {
        "name": "floorPlan",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "floorPlan String?"
      },
      {
        "name": "design",
        "type": "Design",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "design    Design      @relation(fields: [designId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "furniture",
        "type": "Furniture[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "furniture Furniture[]"
      },
      {
        "name": "arSessions",
        "type": "ARSession[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "arSessions ARSession[]"
      }
    ]
  },
  {
    "id": "ai-interior-design-backend-prisma-schema-prisma-shopping-list",
    "sourceProject": "AiInteriorDesign",
    "name": "ShoppingList",
    "displayName": "Shopping List",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id          String   @id @default(uuid())"
      },
      {
        "name": "userId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId      String"
      },
      {
        "name": "designId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "designId    String?"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name        String"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description String?"
      },
      {
        "name": "totalPrice",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "totalPrice  Float    @default(0)"
      },
      {
        "name": "status",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"active\"",
        "sourceLine": "status      String   @default(\"active\")"
      },
      {
        "name": "user",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user  User               @relation(fields: [userId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "items",
        "type": "ShoppingListItem[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "items ShoppingListItem[]"
      }
    ]
  },
  {
    "id": "ai-interior-design-backend-prisma-schema-prisma-shopping-list-item",
    "sourceProject": "AiInteriorDesign",
    "name": "ShoppingListItem",
    "displayName": "Shopping List Item",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id            String   @id @default(uuid())"
      },
      {
        "name": "shoppingListId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "shoppingListId String"
      },
      {
        "name": "furnitureId",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "furnitureId   String?"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name          String"
      },
      {
        "name": "price",
        "type": "Float?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "price         Float?"
      },
      {
        "name": "quantity",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "1",
        "sourceLine": "quantity      Int      @default(1)"
      },
      {
        "name": "purchased",
        "type": "Boolean",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "purchased     Boolean  @default(false)"
      },
      {
        "name": "storeUrl",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "storeUrl      String?"
      },
      {
        "name": "storeName",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "storeName     String?"
      },
      {
        "name": "imageUrl",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "imageUrl      String?"
      },
      {
        "name": "notes",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes         String?"
      },
      {
        "name": "shoppingList",
        "type": "ShoppingList",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "shoppingList ShoppingList @relation(fields: [shoppingListId], references: [id], onDelete: Cascade)"
      },
      {
        "name": "furniture",
        "type": "Furniture?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "furniture    Furniture?   @relation(fields: [furnitureId], references: [id], onDelete: SetNull)"
      }
    ]
  },
  {
    "id": "ai-interior-design-backend-prisma-schema-prisma-style-preset",
    "sourceProject": "AiInteriorDesign",
    "name": "StylePreset",
    "displayName": "Style Preset",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id          String   @id @default(uuid())"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name        String"
      },
      {
        "name": "description",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description String?"
      },
      {
        "name": "thumbnail",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "thumbnail   String?"
      },
      {
        "name": "colors",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "colors      String?"
      },
      {
        "name": "furniture",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "furniture   String?"
      },
      {
        "name": "materials",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "materials   String?"
      },
      {
        "name": "characteristics",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "characteristics String?"
      },
      {
        "name": "popularity",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "popularity  Int      @default(0)"
      }
    ]
  },
  {
    "id": "ai-interior-design-backend-prisma-schema-prisma-subscription",
    "sourceProject": "AiInteriorDesign",
    "name": "Subscription",
    "displayName": "Subscription",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id           String   @id @default(uuid())"
      },
      {
        "name": "userId",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "userId       String"
      },
      {
        "name": "plan",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "plan         String"
      },
      {
        "name": "status",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"active\"",
        "sourceLine": "status       String   @default(\"active\")"
      },
      {
        "name": "designsLeft",
        "type": "Int",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "10",
        "sourceLine": "designsLeft  Int      @default(10)"
      },
      {
        "name": "startDate",
        "type": "DateTime",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "now(",
        "sourceLine": "startDate    DateTime @default(now())"
      },
      {
        "name": "endDate",
        "type": "DateTime?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "endDate      DateTime?"
      },
      {
        "name": "price",
        "type": "Float",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "price        Float"
      },
      {
        "name": "user",
        "type": "User",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "user User @relation(fields: [userId], references: [id], onDelete: Cascade)"
      }
    ]
  },
  {
    "id": "ai-interior-design-backend-prisma-schema-prisma-user",
    "sourceProject": "AiInteriorDesign",
    "name": "User",
    "displayName": "User",
    "framework": "Prisma",
    "sourceFile": "backend/prisma/schema.prisma",
    "columns": [
      {
        "name": "id",
        "type": "String",
        "nullable": false,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "uuid(",
        "sourceLine": "id        String   @id @default(uuid())"
      },
      {
        "name": "email",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email     String   @unique"
      },
      {
        "name": "password",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password  String"
      },
      {
        "name": "name",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name      String"
      },
      {
        "name": "avatar",
        "type": "String?",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "avatar    String?"
      },
      {
        "name": "role",
        "type": "String",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "\"user\"",
        "sourceLine": "role      String   @default(\"user\")"
      },
      {
        "name": "designs",
        "type": "Design[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "designs             Design[]"
      },
      {
        "name": "subscriptions",
        "type": "Subscription[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "subscriptions       Subscription[]"
      },
      {
        "name": "aiGenerations",
        "type": "AIGeneration[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiGenerations       AIGeneration[]"
      },
      {
        "name": "arSessions",
        "type": "ARSession[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "arSessions          ARSession[]"
      },
      {
        "name": "shoppingLists",
        "type": "ShoppingList[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "shoppingLists       ShoppingList[]"
      },
      {
        "name": "passwordResetTokens",
        "type": "PasswordResetToken[]",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "passwordResetTokens PasswordResetToken[]"
      }
    ]
  },
  {
    "id": "ai-landscaping-design-estimator-backend-src-models-client-proposal-js-client-proposals",
    "sourceProject": "AILandscapingDesignEstimator",
    "name": "client_proposals",
    "displayName": "Client Proposals",
    "framework": "Sequelize",
    "sourceFile": "backend/src/models/ClientProposal.js",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id: { ... }"
      },
      {
        "name": "title",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title: { ... }"
      },
      {
        "name": "clientName",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientName: { ... }"
      },
      {
        "name": "clientEmail",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientEmail: { ... }"
      },
      {
        "name": "projectScope",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "projectScope: { ... }"
      },
      {
        "name": "estimatedBudget",
        "type": "FLOAT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "estimatedBudget: { ... }"
      },
      {
        "name": "timeline",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "timeline: { ... }"
      },
      {
        "name": "proposalContent",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "proposalContent: { ... }"
      },
      {
        "name": "aiProposal",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiProposal: { ... }"
      },
      {
        "name": "aiAnalysis",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "null",
        "sourceLine": "aiAnalysis: { ... }"
      },
      {
        "name": "status",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'draft'",
        "sourceLine": "status: { ... }"
      }
    ]
  },
  {
    "id": "ai-landscaping-design-estimator-backend-src-models-client-js-clients",
    "sourceProject": "AILandscapingDesignEstimator",
    "name": "clients",
    "displayName": "Clients",
    "framework": "Sequelize",
    "sourceFile": "backend/src/models/Client.js",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id: { ... }"
      },
      {
        "name": "firstName",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "firstName: { ... }"
      },
      {
        "name": "lastName",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lastName: { ... }"
      },
      {
        "name": "email",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "email: { ... }"
      },
      {
        "name": "phone",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone: { ... }"
      },
      {
        "name": "address",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "address: { ... }"
      },
      {
        "name": "city",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "city: { ... }"
      },
      {
        "name": "state",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "state: { ... }"
      },
      {
        "name": "zipCode",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "zipCode: { ... }"
      },
      {
        "name": "propertyType",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "propertyType: { ... }"
      },
      {
        "name": "propertySize",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "propertySize: { ... }"
      },
      {
        "name": "preferredContact",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'email'",
        "sourceLine": "preferredContact: { ... }"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes: { ... }"
      },
      {
        "name": "status",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status: { ... }"
      },
      {
        "name": "source",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "source: { ... }"
      },
      {
        "name": "totalSpent",
        "type": "FLOAT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "totalSpent: { ... }"
      }
    ]
  },
  {
    "id": "ai-landscaping-design-estimator-backend-src-models-cost-estimate-js-cost-estimates",
    "sourceProject": "AILandscapingDesignEstimator",
    "name": "cost_estimates",
    "displayName": "Cost Estimates",
    "framework": "Sequelize",
    "sourceFile": "backend/src/models/CostEstimate.js",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id: { ... }"
      },
      {
        "name": "title",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title: { ... }"
      },
      {
        "name": "projectType",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "projectType: { ... }"
      },
      {
        "name": "laborCost",
        "type": "FLOAT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "laborCost: { ... }"
      },
      {
        "name": "materialCost",
        "type": "FLOAT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "materialCost: { ... }"
      },
      {
        "name": "equipmentCost",
        "type": "FLOAT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "equipmentCost: { ... }"
      },
      {
        "name": "overheadPercent",
        "type": "FLOAT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "overheadPercent: { ... }"
      },
      {
        "name": "profitMarginPercent",
        "type": "FLOAT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "profitMarginPercent: { ... }"
      },
      {
        "name": "totalEstimate",
        "type": "FLOAT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "totalEstimate: { ... }"
      },
      {
        "name": "clientName",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientName: { ... }"
      },
      {
        "name": "aiBreakdown",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiBreakdown: { ... }"
      },
      {
        "name": "aiAnalysis",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "null",
        "sourceLine": "aiAnalysis: { ... }"
      },
      {
        "name": "status",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'draft'",
        "sourceLine": "status: { ... }"
      }
    ]
  },
  {
    "id": "ai-landscaping-design-estimator-backend-src-models-crew-schedule-js-crew-schedules",
    "sourceProject": "AILandscapingDesignEstimator",
    "name": "crew_schedules",
    "displayName": "Crew Schedules",
    "framework": "Sequelize",
    "sourceFile": "backend/src/models/CrewSchedule.js",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id: { ... }"
      },
      {
        "name": "title",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title: { ... }"
      },
      {
        "name": "crewLeader",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "crewLeader: { ... }"
      },
      {
        "name": "crewSize",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "crewSize: { ... }"
      },
      {
        "name": "projectName",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "projectName: { ... }"
      },
      {
        "name": "assignedDate",
        "type": "DATEONLY",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assignedDate: { ... }"
      },
      {
        "name": "startTime",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "startTime: { ... }"
      },
      {
        "name": "endTime",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "endTime: { ... }"
      },
      {
        "name": "taskDescription",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "taskDescription: { ... }"
      },
      {
        "name": "skillsRequired",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "skillsRequired: { ... }"
      },
      {
        "name": "aiScheduleOptimization",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiScheduleOptimization: { ... }"
      },
      {
        "name": "aiAnalysis",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "null",
        "sourceLine": "aiAnalysis: { ... }"
      },
      {
        "name": "status",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'scheduled'",
        "sourceLine": "status: { ... }"
      }
    ]
  },
  {
    "id": "ai-landscaping-design-estimator-backend-src-models-design-js-designs",
    "sourceProject": "AILandscapingDesignEstimator",
    "name": "designs",
    "displayName": "Designs",
    "framework": "Sequelize",
    "sourceFile": "backend/src/models/Design.js",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id: { ... }"
      },
      {
        "name": "title",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title: { ... }"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description: { ... }"
      },
      {
        "name": "propertyType",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "propertyType: { ... }"
      },
      {
        "name": "squareFootage",
        "type": "FLOAT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "squareFootage: { ... }"
      },
      {
        "name": "style",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "style: { ... }"
      },
      {
        "name": "budget",
        "type": "FLOAT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "budget: { ... }"
      },
      {
        "name": "features",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "features: { ... }"
      },
      {
        "name": "aiDesign",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiDesign: { ... }"
      },
      {
        "name": "aiAnalysis",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "null",
        "sourceLine": "aiAnalysis: { ... }"
      },
      {
        "name": "status",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'draft'",
        "sourceLine": "status: { ... }"
      }
    ]
  },
  {
    "id": "ai-landscaping-design-estimator-backend-src-models-equipment-js-equipment",
    "sourceProject": "AILandscapingDesignEstimator",
    "name": "equipment",
    "displayName": "Equipment",
    "framework": "Sequelize",
    "sourceFile": "backend/src/models/Equipment.js",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id: { ... }"
      },
      {
        "name": "name",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name: { ... }"
      },
      {
        "name": "type",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "type: { ... }"
      },
      {
        "name": "serialNumber",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "serialNumber: { ... }"
      },
      {
        "name": "purchaseDate",
        "type": "DATEONLY",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "purchaseDate: { ... }"
      },
      {
        "name": "purchasePrice",
        "type": "FLOAT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "purchasePrice: { ... }"
      },
      {
        "name": "condition",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "condition: { ... }"
      },
      {
        "name": "lastMaintenanceDate",
        "type": "DATEONLY",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "lastMaintenanceDate: { ... }"
      },
      {
        "name": "nextMaintenanceDate",
        "type": "DATEONLY",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "nextMaintenanceDate: { ... }"
      },
      {
        "name": "assignedTo",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "assignedTo: { ... }"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes: { ... }"
      },
      {
        "name": "aiMaintenancePlan",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiMaintenancePlan: { ... }"
      },
      {
        "name": "status",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status: { ... }"
      }
    ]
  },
  {
    "id": "ai-landscaping-design-estimator-backend-src-models-expense-js-expenses",
    "sourceProject": "AILandscapingDesignEstimator",
    "name": "expenses",
    "displayName": "Expenses",
    "framework": "Sequelize",
    "sourceFile": "backend/src/models/Expense.js",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id: { ... }"
      },
      {
        "name": "description",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description: { ... }"
      },
      {
        "name": "amount",
        "type": "FLOAT",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "amount: { ... }"
      },
      {
        "name": "category",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category: { ... }"
      },
      {
        "name": "date",
        "type": "DATEONLY",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date: { ... }"
      },
      {
        "name": "vendor",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "vendor: { ... }"
      },
      {
        "name": "paymentMethod",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "paymentMethod: { ... }"
      },
      {
        "name": "receiptNumber",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "receiptNumber: { ... }"
      },
      {
        "name": "projectName",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "projectName: { ... }"
      },
      {
        "name": "taxDeductible",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "taxDeductible: { ... }"
      },
      {
        "name": "reimbursable",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "reimbursable: { ... }"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes: { ... }"
      },
      {
        "name": "status",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status: { ... }"
      }
    ]
  },
  {
    "id": "ai-landscaping-design-estimator-backend-src-routes-gap-compliance-js-gap-features",
    "sourceProject": "AILandscapingDesignEstimator",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap-compliance.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(255)"
      },
      {
        "name": "input",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input TEXT"
      },
      {
        "name": "output",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output TEXT"
      },
      {
        "name": "meta",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "meta JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-landscaping-design-estimator-backend-src-routes-gap-crew-skill-matcher-js-gap-features",
    "sourceProject": "AILandscapingDesignEstimator",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap-crew-skill-matcher.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(255)"
      },
      {
        "name": "input",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input TEXT"
      },
      {
        "name": "output",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output TEXT"
      },
      {
        "name": "meta",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "meta JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-landscaping-design-estimator-backend-src-routes-gap-customer-js-gap-features",
    "sourceProject": "AILandscapingDesignEstimator",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap-customer.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(255)"
      },
      {
        "name": "input",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input TEXT"
      },
      {
        "name": "output",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output TEXT"
      },
      {
        "name": "meta",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "meta JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-landscaping-design-estimator-backend-src-routes-gap-design-feasibility-check-js-gap-features",
    "sourceProject": "AILandscapingDesignEstimator",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap-design-feasibility-check.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(255)"
      },
      {
        "name": "input",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input TEXT"
      },
      {
        "name": "output",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output TEXT"
      },
      {
        "name": "meta",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "meta JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-landscaping-design-estimator-backend-src-routes-gap-equipment-js-gap-features",
    "sourceProject": "AILandscapingDesignEstimator",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap-equipment.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(255)"
      },
      {
        "name": "input",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input TEXT"
      },
      {
        "name": "output",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output TEXT"
      },
      {
        "name": "meta",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "meta JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-landscaping-design-estimator-backend-src-routes-gap-maintenance-cost-projector-js-gap-features",
    "sourceProject": "AILandscapingDesignEstimator",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap-maintenance-cost-projector.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(255)"
      },
      {
        "name": "input",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input TEXT"
      },
      {
        "name": "output",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output TEXT"
      },
      {
        "name": "meta",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "meta JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-landscaping-design-estimator-backend-src-routes-gap-material-price-monitor-js-gap-features",
    "sourceProject": "AILandscapingDesignEstimator",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap-material-price-monitor.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(255)"
      },
      {
        "name": "input",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input TEXT"
      },
      {
        "name": "output",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output TEXT"
      },
      {
        "name": "meta",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "meta JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-landscaping-design-estimator-backend-src-routes-gap-mobile-js-gap-features",
    "sourceProject": "AILandscapingDesignEstimator",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap-mobile.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(255)"
      },
      {
        "name": "input",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input TEXT"
      },
      {
        "name": "output",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output TEXT"
      },
      {
        "name": "meta",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "meta JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-landscaping-design-estimator-backend-src-routes-gap-project-js-gap-features",
    "sourceProject": "AILandscapingDesignEstimator",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap-project.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(255)"
      },
      {
        "name": "input",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input TEXT"
      },
      {
        "name": "output",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output TEXT"
      },
      {
        "name": "meta",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "meta JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-landscaping-design-estimator-backend-src-routes-gap-seasonal-demand-forecast-js-gap-features",
    "sourceProject": "AILandscapingDesignEstimator",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap-seasonal-demand-forecast.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(255)"
      },
      {
        "name": "input",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input TEXT"
      },
      {
        "name": "output",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output TEXT"
      },
      {
        "name": "meta",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "meta JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-landscaping-design-estimator-backend-src-routes-gap-webhooks-js-gap-features",
    "sourceProject": "AILandscapingDesignEstimator",
    "name": "gap_features",
    "displayName": "Gap Features",
    "framework": "SQL",
    "sourceFile": "backend/src/routes/gap-webhooks.js",
    "columns": [
      {
        "name": "id",
        "type": "SERIAL",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id SERIAL PRIMARY KEY"
      },
      {
        "name": "slug",
        "type": "VARCHAR",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "slug VARCHAR(255)"
      },
      {
        "name": "input",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "input TEXT"
      },
      {
        "name": "output",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "output TEXT"
      },
      {
        "name": "meta",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "meta JSONB"
      },
      {
        "name": "created_at",
        "type": "TIMESTAMP",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "CURRENT_TIMESTAMP",
        "sourceLine": "created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP"
      }
    ]
  },
  {
    "id": "ai-landscaping-design-estimator-backend-src-models-invoice-js-invoices",
    "sourceProject": "AILandscapingDesignEstimator",
    "name": "invoices",
    "displayName": "Invoices",
    "framework": "Sequelize",
    "sourceFile": "backend/src/models/Invoice.js",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id: { ... }"
      },
      {
        "name": "invoiceNumber",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "invoiceNumber: { ... }"
      },
      {
        "name": "clientName",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientName: { ... }"
      },
      {
        "name": "clientEmail",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientEmail: { ... }"
      },
      {
        "name": "projectName",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "projectName: { ... }"
      },
      {
        "name": "services",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "services: { ... }"
      },
      {
        "name": "laborTotal",
        "type": "FLOAT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "laborTotal: { ... }"
      },
      {
        "name": "materialTotal",
        "type": "FLOAT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "materialTotal: { ... }"
      },
      {
        "name": "taxRate",
        "type": "FLOAT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "taxRate: { ... }"
      },
      {
        "name": "totalAmount",
        "type": "FLOAT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "totalAmount: { ... }"
      },
      {
        "name": "dueDate",
        "type": "DATEONLY",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dueDate: { ... }"
      },
      {
        "name": "paidDate",
        "type": "DATEONLY",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "paidDate: { ... }"
      },
      {
        "name": "aiInvoiceReview",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiInvoiceReview: { ... }"
      },
      {
        "name": "status",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status: { ... }"
      }
    ]
  },
  {
    "id": "ai-landscaping-design-estimator-backend-src-models-irrigation-plan-js-irrigation-plans",
    "sourceProject": "AILandscapingDesignEstimator",
    "name": "irrigation_plans",
    "displayName": "Irrigation Plans",
    "framework": "Sequelize",
    "sourceFile": "backend/src/models/IrrigationPlan.js",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id: { ... }"
      },
      {
        "name": "title",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title: { ... }"
      },
      {
        "name": "propertyName",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "propertyName: { ... }"
      },
      {
        "name": "zoneCount",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "zoneCount: { ... }"
      },
      {
        "name": "waterSource",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "waterSource: { ... }"
      },
      {
        "name": "soilType",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "soilType: { ... }"
      },
      {
        "name": "squareFootage",
        "type": "FLOAT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "squareFootage: { ... }"
      },
      {
        "name": "currentUsageGallons",
        "type": "FLOAT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "currentUsageGallons: { ... }"
      },
      {
        "name": "targetSavingsPercent",
        "type": "FLOAT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "targetSavingsPercent: { ... }"
      },
      {
        "name": "aiOptimization",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiOptimization: { ... }"
      },
      {
        "name": "aiAnalysis",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "null",
        "sourceLine": "aiAnalysis: { ... }"
      },
      {
        "name": "status",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'draft'",
        "sourceLine": "status: { ... }"
      }
    ]
  },
  {
    "id": "ai-landscaping-design-estimator-backend-src-models-maintenance-schedule-js-maintenance-schedules",
    "sourceProject": "AILandscapingDesignEstimator",
    "name": "maintenance_schedules",
    "displayName": "Maintenance Schedules",
    "framework": "Sequelize",
    "sourceFile": "backend/src/models/MaintenanceSchedule.js",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id: { ... }"
      },
      {
        "name": "title",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title: { ... }"
      },
      {
        "name": "propertyName",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "propertyName: { ... }"
      },
      {
        "name": "season",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "season: { ... }"
      },
      {
        "name": "taskType",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "taskType: { ... }"
      },
      {
        "name": "frequency",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "frequency: { ... }"
      },
      {
        "name": "scheduledDate",
        "type": "DATEONLY",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scheduledDate: { ... }"
      },
      {
        "name": "priority",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'medium'",
        "sourceLine": "priority: { ... }"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes: { ... }"
      },
      {
        "name": "aiRecommendation",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiRecommendation: { ... }"
      },
      {
        "name": "aiAnalysis",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "null",
        "sourceLine": "aiAnalysis: { ... }"
      },
      {
        "name": "status",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status: { ... }"
      }
    ]
  },
  {
    "id": "ai-landscaping-design-estimator-backend-src-models-material-estimate-js-material-estimates",
    "sourceProject": "AILandscapingDesignEstimator",
    "name": "material_estimates",
    "displayName": "Material Estimates",
    "framework": "Sequelize",
    "sourceFile": "backend/src/models/MaterialEstimate.js",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id: { ... }"
      },
      {
        "name": "title",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title: { ... }"
      },
      {
        "name": "projectType",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "projectType: { ... }"
      },
      {
        "name": "area",
        "type": "FLOAT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "area: { ... }"
      },
      {
        "name": "materialType",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "materialType: { ... }"
      },
      {
        "name": "quantity",
        "type": "FLOAT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "quantity: { ... }"
      },
      {
        "name": "unit",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unit: { ... }"
      },
      {
        "name": "unitPrice",
        "type": "FLOAT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "unitPrice: { ... }"
      },
      {
        "name": "totalCost",
        "type": "FLOAT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "totalCost: { ... }"
      },
      {
        "name": "supplier",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "supplier: { ... }"
      },
      {
        "name": "aiEstimate",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiEstimate: { ... }"
      },
      {
        "name": "status",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'estimated'",
        "sourceLine": "status: { ... }"
      }
    ]
  },
  {
    "id": "ai-landscaping-design-estimator-backend-src-models-photo-gallery-js-photo-gallery",
    "sourceProject": "AILandscapingDesignEstimator",
    "name": "photo_gallery",
    "displayName": "Photo Gallery",
    "framework": "Sequelize",
    "sourceFile": "backend/src/models/PhotoGallery.js",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id: { ... }"
      },
      {
        "name": "title",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title: { ... }"
      },
      {
        "name": "projectName",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "projectName: { ... }"
      },
      {
        "name": "category",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category: { ... }"
      },
      {
        "name": "description",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "description: { ... }"
      },
      {
        "name": "location",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location: { ... }"
      },
      {
        "name": "dateTaken",
        "type": "DATEONLY",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "dateTaken: { ... }"
      },
      {
        "name": "beforeAfter",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "beforeAfter: { ... }"
      },
      {
        "name": "tags",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "tags: { ... }"
      },
      {
        "name": "aiAnalysis",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiAnalysis: { ... }"
      },
      {
        "name": "aiAnalysisJson",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "null",
        "sourceLine": "aiAnalysisJson: { ... }"
      },
      {
        "name": "status",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status: { ... }"
      }
    ]
  },
  {
    "id": "ai-landscaping-design-estimator-backend-src-models-plant-js-plants",
    "sourceProject": "AILandscapingDesignEstimator",
    "name": "plants",
    "displayName": "Plants",
    "framework": "Sequelize",
    "sourceFile": "backend/src/models/Plant.js",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id: { ... }"
      },
      {
        "name": "name",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name: { ... }"
      },
      {
        "name": "scientificName",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "scientificName: { ... }"
      },
      {
        "name": "category",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "category: { ... }"
      },
      {
        "name": "sunRequirement",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "sunRequirement: { ... }"
      },
      {
        "name": "waterNeeds",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "waterNeeds: { ... }"
      },
      {
        "name": "hardinessZone",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hardinessZone: { ... }"
      },
      {
        "name": "matureHeight",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "matureHeight: { ... }"
      },
      {
        "name": "bloomSeason",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "bloomSeason: { ... }"
      },
      {
        "name": "price",
        "type": "FLOAT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "price: { ... }"
      },
      {
        "name": "aiCareGuide",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiCareGuide: { ... }"
      },
      {
        "name": "status",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status: { ... }"
      }
    ]
  },
  {
    "id": "ai-landscaping-design-estimator-backend-src-models-project-js-projects",
    "sourceProject": "AILandscapingDesignEstimator",
    "name": "projects",
    "displayName": "Projects",
    "framework": "Sequelize",
    "sourceFile": "backend/src/models/Project.js",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id: { ... }"
      },
      {
        "name": "title",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title: { ... }"
      },
      {
        "name": "clientName",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "clientName: { ... }"
      },
      {
        "name": "address",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "address: { ... }"
      },
      {
        "name": "projectType",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "projectType: { ... }"
      },
      {
        "name": "startDate",
        "type": "DATEONLY",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "startDate: { ... }"
      },
      {
        "name": "endDate",
        "type": "DATEONLY",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "endDate: { ... }"
      },
      {
        "name": "budget",
        "type": "FLOAT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "budget: { ... }"
      },
      {
        "name": "progress",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "progress: { ... }"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes: { ... }"
      },
      {
        "name": "aiTimeline",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiTimeline: { ... }"
      },
      {
        "name": "status",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'planning'",
        "sourceLine": "status: { ... }"
      }
    ]
  },
  {
    "id": "ai-landscaping-design-estimator-backend-src-models-soil-analysis-js-soil-analyses",
    "sourceProject": "AILandscapingDesignEstimator",
    "name": "soil_analyses",
    "displayName": "Soil Analyses",
    "framework": "Sequelize",
    "sourceFile": "backend/src/models/SoilAnalysis.js",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id: { ... }"
      },
      {
        "name": "title",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title: { ... }"
      },
      {
        "name": "location",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "location: { ... }"
      },
      {
        "name": "soilType",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "soilType: { ... }"
      },
      {
        "name": "phLevel",
        "type": "FLOAT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phLevel: { ... }"
      },
      {
        "name": "nitrogenLevel",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "nitrogenLevel: { ... }"
      },
      {
        "name": "phosphorusLevel",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phosphorusLevel: { ... }"
      },
      {
        "name": "potassiumLevel",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "potassiumLevel: { ... }"
      },
      {
        "name": "organicMatter",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "organicMatter: { ... }"
      },
      {
        "name": "drainageRating",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "drainageRating: { ... }"
      },
      {
        "name": "aiAnalysis",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiAnalysis: { ... }"
      },
      {
        "name": "aiAnalysisJson",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "null",
        "sourceLine": "aiAnalysisJson: { ... }"
      },
      {
        "name": "status",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status: { ... }"
      }
    ]
  },
  {
    "id": "ai-landscaping-design-estimator-backend-src-models-supplier-js-suppliers",
    "sourceProject": "AILandscapingDesignEstimator",
    "name": "suppliers",
    "displayName": "Suppliers",
    "framework": "Sequelize",
    "sourceFile": "backend/src/models/Supplier.js",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id: { ... }"
      },
      {
        "name": "name",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name: { ... }"
      },
      {
        "name": "contactPerson",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "contactPerson: { ... }"
      },
      {
        "name": "email",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "email: { ... }"
      },
      {
        "name": "phone",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "phone: { ... }"
      },
      {
        "name": "address",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "address: { ... }"
      },
      {
        "name": "specialty",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "specialty: { ... }"
      },
      {
        "name": "rating",
        "type": "FLOAT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "rating: { ... }"
      },
      {
        "name": "deliveryTime",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "deliveryTime: { ... }"
      },
      {
        "name": "paymentTerms",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "paymentTerms: { ... }"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes: { ... }"
      },
      {
        "name": "aiSupplierAnalysis",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiSupplierAnalysis: { ... }"
      },
      {
        "name": "aiAnalysis",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "null",
        "sourceLine": "aiAnalysis: { ... }"
      },
      {
        "name": "status",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status: { ... }"
      }
    ]
  },
  {
    "id": "ai-landscaping-design-estimator-backend-src-models-time-entry-js-time-entries",
    "sourceProject": "AILandscapingDesignEstimator",
    "name": "time_entries",
    "displayName": "Time Entries",
    "framework": "Sequelize",
    "sourceFile": "backend/src/models/TimeEntry.js",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id: { ... }"
      },
      {
        "name": "workerName",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "workerName: { ... }"
      },
      {
        "name": "projectName",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "projectName: { ... }"
      },
      {
        "name": "date",
        "type": "DATEONLY",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "date: { ... }"
      },
      {
        "name": "startTime",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "startTime: { ... }"
      },
      {
        "name": "endTime",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "endTime: { ... }"
      },
      {
        "name": "hoursWorked",
        "type": "FLOAT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hoursWorked: { ... }"
      },
      {
        "name": "hourlyRate",
        "type": "FLOAT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "hourlyRate: { ... }"
      },
      {
        "name": "taskType",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "taskType: { ... }"
      },
      {
        "name": "breakMinutes",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "0",
        "sourceLine": "breakMinutes: { ... }"
      },
      {
        "name": "overtime",
        "type": "BOOLEAN",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "false",
        "sourceLine": "overtime: { ... }"
      },
      {
        "name": "notes",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "notes: { ... }"
      },
      {
        "name": "status",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'pending'",
        "sourceLine": "status: { ... }"
      }
    ]
  },
  {
    "id": "ai-landscaping-design-estimator-backend-src-models-user-js-users",
    "sourceProject": "AILandscapingDesignEstimator",
    "name": "users",
    "displayName": "Users",
    "framework": "Sequelize",
    "sourceFile": "backend/src/models/User.js",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id: { ... }"
      },
      {
        "name": "name",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "name: { ... }"
      },
      {
        "name": "email",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": true,
        "defaultValue": "",
        "sourceLine": "email: { ... }"
      },
      {
        "name": "password",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "password: { ... }"
      },
      {
        "name": "company",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "''",
        "sourceLine": "company: { ... }"
      },
      {
        "name": "phone",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "''",
        "sourceLine": "phone: { ... }"
      },
      {
        "name": "address",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "''",
        "sourceLine": "address: { ... }"
      },
      {
        "name": "role",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'user'",
        "sourceLine": "role: { ... }"
      }
    ]
  },
  {
    "id": "ai-landscaping-design-estimator-backend-src-models-weather-plan-js-weather-plans",
    "sourceProject": "AILandscapingDesignEstimator",
    "name": "weather_plans",
    "displayName": "Weather Plans",
    "framework": "Sequelize",
    "sourceFile": "backend/src/models/WeatherPlan.js",
    "columns": [
      {
        "name": "id",
        "type": "INTEGER",
        "nullable": true,
        "primaryKey": true,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "id: { ... }"
      },
      {
        "name": "title",
        "type": "STRING",
        "nullable": false,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "title: { ... }"
      },
      {
        "name": "region",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "region: { ... }"
      },
      {
        "name": "season",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "season: { ... }"
      },
      {
        "name": "avgTemperature",
        "type": "FLOAT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "avgTemperature: { ... }"
      },
      {
        "name": "avgRainfall",
        "type": "FLOAT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "avgRainfall: { ... }"
      },
      {
        "name": "frostRisk",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "frostRisk: { ... }"
      },
      {
        "name": "windExposure",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "windExposure: { ... }"
      },
      {
        "name": "recommendations",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "recommendations: { ... }"
      },
      {
        "name": "aiWeatherPlan",
        "type": "TEXT",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "",
        "sourceLine": "aiWeatherPlan: { ... }"
      },
      {
        "name": "aiAnalysis",
        "type": "JSONB",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "null",
        "sourceLine": "aiAnalysis: { ... }"
      },
      {
        "name": "status",
        "type": "STRING",
        "nullable": true,
        "primaryKey": false,
        "unique": false,
        "defaultValue": "'active'",
        "sourceLine": "status: { ... }"
      }
    ]
  }
];
